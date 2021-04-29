(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = n(12);
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        i = n(3),
        o = n.n(i),
        l = (n(10), n(4)),
        r = n(1),
        s =
          (n(11),
          function () {
            var e = c.a.useState({ id: null, title: "", completed: !1 }),
              t = Object(r.a)(e, 2),
              n = t[0],
              a = t[1],
              i = c.a.useState([]),
              o = Object(r.a)(i, 2),
              s = o[0],
              m = o[1],
              u = c.a.useState(!1),
              d = Object(r.a)(u, 2),
              p = d[0],
              f = d[1],
              h = function () {
                fetch("http://165.232.176.214/api/task-list/")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return m(e);
                  });
              };
            return (
              c.a.useEffect(function () {
                h();
              }, []),
              c.a.createElement(
                "div",
                { className: "container" },
                c.a.createElement(
                  "div",
                  { id: "task-container" },
                  c.a.createElement(
                    "div",
                    { id: "form-wrapper" },
                    c.a.createElement(
                      "center",
                      null,
                      c.a.createElement(
                        "p",
                        { style: { fontSize: "20px" } },
                        "Prateek's Taks Management"
                      )
                    ),
                    c.a.createElement(
                      "form",
                      {
                        onSubmit: function (e) {
                          e.preventDefault();
                          var t = "".concat(
                            "http://165.232.176.214/api",
                            "/task-create/"
                          );
                          1 == p &&
                            ((t = "http://165.232.176.214/api/task-update/".concat(
                              n.id,
                              "/"
                            )),
                            f(!1)),
                            fetch(t, {
                              method: "POST",
                              headers: { "Content-type": "application/json" },
                              body: JSON.stringify(n),
                            })
                              .then(function (e) {
                                h(), a({ id: null, title: "", completed: !1 });
                              })
                              .catch(function (e) {
                                console.log("ERROR:", e);
                              });
                        },
                        id: "form",
                      },
                      c.a.createElement(
                        "div",
                        { className: "flex-wrapper" },
                        c.a.createElement(
                          "div",
                          { style: { flex: 6 } },
                          c.a.createElement("input", {
                            className: "form-control",
                            onChange: function (e) {
                              e.target.name;
                              var t = e.target.value;
                              a(Object(l.a)({}, n, { title: t }));
                            },
                            value: n.title,
                            id: "title",
                            type: "text",
                            name: "title",
                            placeholder: "Add task..",
                          })
                        ),
                        c.a.createElement(
                          "div",
                          { style: { flex: 1 } },
                          c.a.createElement("input", {
                            id: "submit",
                            className: "btn btn-warning",
                            type: "submit",
                            name: "Add",
                          })
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { id: "list-wrapper" },
                    s.map(function (e, t) {
                      return c.a.createElement(
                        "div",
                        { key: t, className: "task-wrapper flex-wrapper" },
                        c.a.createElement(
                          "div",
                          {
                            onClick: function () {
                              return (function (e) {
                                e.completed = !e.completed;
                                var t = "http://165.232.176.214/api/task-update/".concat(
                                  e.id,
                                  "/"
                                );
                                fetch(t, {
                                  method: "POST",
                                  headers: {
                                    "Content-type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    completed: e.completed,
                                    title: e.title,
                                  }),
                                }).then(function () {
                                  h();
                                });
                              })(e);
                            },
                            style: { flex: 7 },
                          },
                          0 == e.completed
                            ? c.a.createElement("span", null, e.title)
                            : c.a.createElement("strike", null, e.title)
                        ),
                        c.a.createElement(
                          "div",
                          { style: { flex: 1 } },
                          c.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                return (function (e) {
                                  a(e), f(!0);
                                })(e);
                              },
                              className: "btn btn-sm btn-outline-info",
                            },
                            "Edit"
                          )
                        ),
                        c.a.createElement(
                          "div",
                          { style: { flex: 1 } },
                          c.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                return (function (e) {
                                  fetch(
                                    "http://165.232.176.214/api/task-delete/".concat(
                                      e.id,
                                      "/"
                                    ),
                                    {
                                      method: "DELETE",
                                      headers: {
                                        "Content-type": "application/json",
                                      },
                                    }
                                  ).then(function (e) {
                                    h();
                                  });
                                })(e);
                              },
                              className: "btn btn-sm btn-outline-dark delete",
                            },
                            "-"
                          )
                        )
                      );
                    })
                  )
                )
              )
            );
          });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(c.a.createElement(s, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[5, 1, 2]],
]);
