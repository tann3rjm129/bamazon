# Bamazon - Command Line Amazon App

## Description

Bamazon is a very basic command line node app that allows you to:
	1. Pick item/items to shop for.
	2. Pick the quanitity desired. 
	3. Determine your total cost for your purchase.
	4. Reflect a purchase in "Bamazon's" online stock database. 

Once npm and the propper packages have been installed in your terminal:

![alt-text](pictures/start-up.jpg)

The app introdruces itself, Lists what's for sale, and asks the user if they would like to shop? If no, the app stops. 

![alt-text](pictures/display-table.jpg)

The full stock of "Bamazon" is listed included in the original command. 

![alt-text](pictures/shopping.jpg)

If you continue and select YES, you are prompted for the "ID" of the item you would like to purchase. The app will only accept numbers 1-10, due to the database having a maximum of 10 items. The next quantity desired prompt, only accepts numbers as well. I arbitrarily just picked a 20 quantity limit. 

If "Bamazon" does not have the inventory for your request, the app will notify you that it does not have the stock to complete your order and request either to pick something else or less of the same item. 

![alt-text](pictures/totals.jpg)

After you answer the questions, "Bamazon" will give you a virtual reciept: listing the item you purchased, the quantity, and your total owed. "Bamazon" updates its own inventory, notifying the user of the current stock left of the purchased item. After purchasing, it will prompt and ask if you would like to continue shopping.

![alt-text](pictures/databaseRefresh.jpg)

If yes, you can see the updated inventory reflected on the table.


## Result

Uses JavaScript, jQuery, node/nodemon, npm + addons (inquirer, mysql, CLI-table), MYSQL.
