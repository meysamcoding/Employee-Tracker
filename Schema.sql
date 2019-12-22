DROP DATABASE IF EXISTS Employee_TrakerDB;

CREATE database Employee_TrakerDB;

USE Employee_TrakerDB;
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name_id VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT  AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL (10, 2) NULL,
  department_id INT NULL,   
  PRIMARY KEY ( ID)
);
CREATE  TABLE  employee(
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR (30) NULL,
  role_id INT NULL, 
  manager_id INT NULL,  
  PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
 