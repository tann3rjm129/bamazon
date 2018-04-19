
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({

	host: "localhost",
	port: 3200,

	user: "root",

	password: "root",
	database: "bamazon_db"

});

connection.connect(function(err) {
	if (err) throw err;
	// runs startup function
	startUp();
});


function startUp() {
	inquirer.prompt({

	}).then(function(answer){


	});
}