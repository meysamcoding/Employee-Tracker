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
    const query = "SELECT first_name, last_name,title, name_id,salary FROM employee JOIN role ON employee.id = role.id JOIN department ON role.id = department.id ";
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
            name: "name_id",
            message: "what is name of department?"
        }).then(function (answer) {
            // const query = "INSERT INTO department (name_id) SET ?",
            // {
            //     name_id: answer.name_id
            // }
            connection.query("INSERT INTO department SET ?",
                {
                    name_id: answer.name_id
                },
                function (err, answer) {
                    if (err) throw err;
                    console.log("you succssecfully add to the table department.")

                    startprogram();
                }
            );
        });
};



    

 
function add_roles() {



    startprogram();

}
function add_employees() {


    startprogram();

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


    startprogram();

}
function remove_role() {


    startprogram();

}
function remove_employee() {



    startprogram();
}
function showtotalbudge() {





    startprogram();

} 