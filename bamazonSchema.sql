DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(7,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("King Mattress", "Bedroom", 999.99 , 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Modern Bookshelf","Bedroom", 69.98, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pot and Pan set","Kitchen", 99.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Area-Rug","Living Room", 124.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bath Towel","Bathroom", 25.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo","Bathroom", 6.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dinning Room Table","Dinning Room", 130.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("55 inch flatscreen TV","Electronics", 769.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sectional Couch","Living Room", 699.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush","bathroom", 1.99, 80);

SELECT * FROM products;