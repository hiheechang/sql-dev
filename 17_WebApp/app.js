const express = require("express");
const mysql = require("mysql");
const app = express();

app.set("view engine", "ejs");

const connection = mysql.createConnection({
    host: 'localhost',
    user: root,
    database: 
})


app.get("/", function(req, res) {
    // get num of users in DB & send num
    const q = 'SELECT COUNT(*) FROM users';
    connection.query(q, function(error, results) {
        if (error) throw error;
        var msg = "We have " + results[0].count + " users";
        res.send(msg);
    });
});

app.listen(8080, function)