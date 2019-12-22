USE Employee_TrakerDB;
INSERT INTO department(name_id) VALUES('computer');
INSERT INTO department(name_id) VALUES('sales');
INSERT INTO department(name_id) VALUES('sport');
INSERT INTO department(name_id) VALUES('Art');

INSERT INTO role(title, salary,department_id)  VALUES("Software", 13000, 11);
INSERT INTO role(title, salary,department_id) VALUES("hardware", 14000, 8);
INSERT INTO role(title, salary,department_id)  VALUES("sales", 7000, 11);
INSERT INTO role(title, salary,department_id) VALUES("type", 5000, 8);

INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES ("addel","singer", 33, 1222);
INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES ("jack","boby", 6, 2248);
INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES ("Rachel","trupm", 9, 1888);
INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES ("Meysam","Najafi", 3, 1523);


 
 