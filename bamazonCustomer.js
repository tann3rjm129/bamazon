
// portfolio linked: https://tann3rjm129.github.io/Bootstrap-Portfolio/portfolio.html

var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({

	host: "localhost",
	port: 3306,

	user: "root",

	password: "root",
	database: "bamazon_db"

});

connection.connect(function(err) {
	if (err) throw err;
	startUp();
});


function startUp() {

	displayItems();

	inquirer.prompt({
		name: "purchase",
      	type: "list",
      	message: "Would you like to purchase something today?",
      	choices: ["YES", "NO"]
	}).then(function(answer){

		if (answer.purchase === "YES"){
			itemSelector();
		}

		else {
			console.log("Goodbye");
			return
		}
	});
	console.log('\n-----------------------------------------\n');

}


function displayItems() {

	console.log('\n-----------------------------------------\n');
	console.log("Welcome to Bamazon, your go-to command-line shopping window!");
	console.log("Here's what's for sale today:");
	console.log('\n-----------------------------------------\n');


	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;

		var table = new Table({
					  head: ["ID", "Product Name", "Department", "Price", "Stock"]
					  , colWidths: [10, 25, 20, 10, 10],

					  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
			         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
			         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
			         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
					});

	for (var x=0; x < results.length; x++) {
		
		table.push(
			[results[x].id, results[x].product_name, results[x].department_name, results[x].price, results[x].stock_quantity]
			);
	}
		console.log(table.toString());
		console.log('\n-----------------------------------------\n');

	});}

function itemSelector() {

		connection.query("SELECT * FROM products", function(err, results) {
			if (err) throw err;


			inquirer.prompt([
					{name: "selector",
				     type: "input",
				     message: "Please input the ID of the item you would like to purchase?",
				     validate: function(value) {
					          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
					            return true;
					          }
					          console.log(" Please enter one of the displayed id NUMBERS.");
					          return false;
					          
					      }
					},
					{
					 name: "amount",
				     type: "input",
				     message: "How many of this item would you like to buy?",
				     validate: function(value) {
					          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 20) {
					            return true;
					          }
					          
					          console.log(" Please enter a NUMBER. 20 item limit.");
					          return false;
					          
					      }
					}
					]).then(function(answer){

						var chosenOption;

						for (var i = 0; i < results.length; i++) {
							 if (results[i].id == answer.selector) {
							    	chosenOption = results[i];
							    }
			        		};
			        		
			        	if (chosenOption.stock_quantity - answer.amount > 0) {


			        			connection.query("UPDATE products SET ? WHERE ?",
							            [
							              {
							                stock_quantity: chosenOption.stock_quantity - answer.amount
							              },
							              {
							                id: chosenOption.id
							              }
							            ],
							            function(error, results) {
							              if (error) throw err;

										var currentInventory = (chosenOption.stock_quantity - answer.amount);

										var currentInventory

			        			 		var total = answer.amount * chosenOption.price;

			        			 		  console.log('\n-----------------------------------------\n');
							              console.log("You've selected: " + chosenOption.product_name);
							              console.log("Quantity: " + answer.amount);
							              console.log("Your total is: $" + total);
							              console.log('\n-----------------------------------------\n');
							              console.log("The inventory has been updated!")
							           	  console.log("Item: " + chosenOption.product_name + " Stock left: " + currentInventory);
							              console.log("Feel free to browse for more.");
							              console.log('\n-----------------------------------------\n');

										continueShopping();

							            }
							          );

			        		}

						else {
							console.log('\n-----------------------------------------\n');
							console.log("We do not have enough in stock.");
							console.log("Please pick fewer items or an item in stock.");
							console.log('\n-----------------------------------------\n');

							continueShopping();
							return
						}
					});
});
	}


function continueShopping() {

	inquirer.prompt({
						name: "continue",
				      	type: "list",
				      	message: "Would you like to continue shopping?",
				      	choices: ["YES", "NO"]

					}).then(function(answer){

					if (answer.continue === "YES") {
						startUp();
					}

					else {
						return console.log("goodbye");
					}

});
		}

	