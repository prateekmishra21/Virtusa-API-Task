import React from "react";
import "./App.css";
const App = () => {
  const endPoint = "http://127.0.0.1:8000/api";
  const [activateItem, setActivateItem] = React.useState({
    id: null,
    title: "",
    completed: false,
  });
  const [allTasks, setAllTasks] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    var url = `${endPoint}/task-create/`;

    if (isEditing == true) {
      url = `http://127.0.0.1:8000/api/task-update/${activateItem.id}/`;
      setIsEditing(false);
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(activateItem),
    })
      .then((response) => {
        fetchTasks();
        setActivateItem({
          id: null,
          title: "",
          completed: false,
        });
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      });
  };

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setActivateItem({
      ...activateItem,
      title: value,
    });
  };

  const fetchTasks = () => {
    fetch("http://127.0.0.1:8000/api/task-list/")
      .then((response) => response.json())
      .then((data) => setAllTasks(data));
  };

  const startEdit = (task) => {
    setActivateItem(task);
    setIsEditing(true);
  };

  const deleteItem = (task) => {
    fetch(`http://127.0.0.1:8000/api/task-delete/${task.id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      fetchTasks();
    });
  };

  const strikeUnstrike = (task) => {
    task.completed = !task.completed;
    var url = `http://127.0.0.1:8000/api/task-update/${task.id}/`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ completed: task.completed, title: task.title }),
    }).then(() => {
      fetchTasks();
    });
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div id="task-container">
        <div id="form-wrapper">
          <center>
            <p style={{ fontSize: "20px" }}>Prateek's Taks Management</p>
          </center>
          <form onSubmit={handleSubmit} id="form">
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  onChange={handleChange}
                  value={activateItem.title}
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add task.."
                />
              </div>

              <div style={{ flex: 1 }}>
                <input
                  id="submit"
                  className="btn btn-warning"
                  type="submit"
                  name="Add"
                />
              </div>
            </div>
          </form>
        </div>

        <div id="list-wrapper">
          {allTasks.map(function (task, index) {
            return (
              <div key={index} className="task-wrapper flex-wrapper">
                <div onClick={() => strikeUnstrike(task)} style={{ flex: 7 }}>
                  {task.completed == false ? (
                    <span>{task.title}</span>
                  ) : (
                    <strike>{task.title}</strike>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <button
                    onClick={() => startEdit(task)}
                    className="btn btn-sm btn-outline-info"
                  >
                    Edit
                  </button>
                </div>

                <div style={{ flex: 1 }}>
                  <button
                    onClick={() => deleteItem(task)}
                    className="btn btn-sm btn-outline-dark delete"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
