var mysql = require("mysql");
var inquirer = require("inquirer");
var PORT = process.env.PORT || 8080;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Employee_TrakerDB"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("server connect: localhost:" + PORT);
    startprogram();
});
function startprogram() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "what do you like to do?",
            choices: [
                "show me all employees",
                "add departments",
                "add roles",
                "add employees",
                "view departments",
                "view roles",
                "view employees",
                "update employees",
                "remove departements",
                "remove roles",
                "remove employee",
                "show total budget",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "show me all employees":
                    showalltable();
                    break;
                case "add departments":
                    add_department();
                    break;
                case "add roles":
                    add_roles();
                    break;
                case "add employees":
                    add_employees();
                    break;
                case "view departments":
                    view_department();
                    break;
                case "view roles":
                    view_roles();
                    break;
                case "view employees":
                    view_employee();
                    break;
                case "update employees":
                    updateemployee();
                    break;
                case "remove departements":
                    remove_dep();
                    break;
                case "remove roles":
                    remove_role();
                    break;
                case "remove employee":
                    remove_employee();
                    break;
                case "show total budget":
                    showtotalbudge();
                    break;
                case "exit":
                    connection.end();
                    break;
            }
        });
}
function showalltable() {
    const query = "SELECT first_name, last_name,title, name_id,salary FROM employee JOIN role ON employee.id = role.id JOIN department ON department.id = department.id ";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startprogram();
    });
}
function add_department() {
    inquirer
        .prompt({
            type: "input",
            name: "name",
            message: "what is name of department?"
        }).then(function (answer) {

            connection.query(
                "INSERT INTO department SET ?",
                {
                    name_id: answer.name
                },
                function (err) {
                    if (err) throw err;
                    console.log("you succssecfully add to the table department.")

                    startprogram();
                }
            );
        });
};
function add_roles() {
    inquirer
        .prompt([{
            type: "input",
            name: "title",
            message: "what is name of roles title?"
        },
        {
            type: "input",
            name: "salary",
            message: "what is name of salary?"
        },
        {
            type: "input",
            name: "dep_id",
            message: "what is your department id?"
        }
        ]).then(function (answer) {

            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.dep_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("you succssecfully add to the table role.");
                    startprogram();
                }
            );
        });
}
function add_employees() {
    inquirer
        .prompt([{
            type: "input",
            name: "first_name",
            message: "what is your emplyee first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "what is your emplyee last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "what is your employee role id?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "what is your employee manager id?"
        }]).then(function (answer) {

            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("you succssecfully add to the table employees.");
                    startprogram();
                }
            );
        });
}
function view_department() {
    const query = "SELECT  * FROM  department ";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startprogram();
    });
}
function view_roles() {
    const query = "SELECT  * FROM  role ";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startprogram();
    });
}
function view_employee() {
    const query = "SELECT  * FROM  employee ";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startprogram();
    });
}
function updateemployee() {
    startprogram();
}
function remove_dep() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "name_id",
                    message: "what is name of department?",
                    choices: function () {
                        var namelist = [];
                        for (let i = 0; i < res.length; i++) {
                            namelist.push(res[i].name_id);
                        }
                        return namelist;
                    }
                }
            ]).then(function (answer) {
                connection.query(
                    "DELETE FROM department WHERE ?",
                    {
                        name_id: answer.name_id
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("you succssecfully remove table department.")

                        startprogram();
                    }
                );
            });
    });
}
function remove_role() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "title",
                    message: "what is name of role?",
                    choices: function () {
                        var titlelist = [];
                        for (var i = 0; i < res.length; i++) {
                            titlelist.push(res[i].title);
                        }
                        return titlelist;
                    }
                }
            ]).then(function (answer) {
                connection.query(
                    "DELETE FROM role WHERE ?",
                    {
                        title: answer.title
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("you succssecfully remove role table.")

                        startprogram();
                    }
                );
            });
    });
}
function remove_employee() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "first_name",
                    message: "what is name of employee?",
                    choices: function () {
                        var first_namelist = [];
                        for (var i = 0; i < res.length; i++) {
                            first_namelist.push(res[i].first_name);
                        }
                        return first_namelist;
                    }
                }
            ]).then(function (answer) {
                connection.query(
                    "DELETE FROM employee WHERE ?",
                    {
                        first_name: answer.first_name
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("you succssecfully remove employee table.")

                        startprogram();
                    }
                );
            });
    });



    startprogram();
}
function showtotalbudge() {





    startprogram();

} 