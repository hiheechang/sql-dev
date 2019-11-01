CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    age INT NOT NULL,
    current_status VARCHAR(30) NOT NULL DEFAULT 'employed',
    PRIMARY KEY(id)
);

or

CREATE TABLE employees
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    middle_name VARCHAR(30),
    age INT NOT NULL,
    current_status VARCHAR(30) NOT NULL DEFAULT 'employed',
);

INSERT INTO employees(first_name, last_name, age) VALUES('heechang', 'kang', 22);