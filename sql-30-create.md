# SQL

## Basic commands

mysql-ctl cli

database Server <-- databases

create and destroy
- SHOW DATABASES;
- CREATE DATABASE <name> ;
- DROP DATABASE <name>;

use
- USE <name>;
- SELECT database(); 

tables
- data types : numeric(int), string(varchar), date

    CREATE TABLE <name-plural>(
        column_name data_type,
    );
- SHOW TABLES; 
- SHOW COLUMNS FROM <table_name>; DESC <table_name>;

- DROP TABLE <table_name>;
