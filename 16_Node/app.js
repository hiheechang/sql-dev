const faker = require('faker');
const mysql = require("mysql");

const connection = mtsql.createConnection ({
    host : 'localhost',
    user : 'root',
    database : 'join_us'
})

var q = 'SELECT CURDATE()';

connection.query(q, function(error, results, fields) {
    if(error) throw error;
    console.log('The solution is: ', results[0].solution);
});



for(var i=0; i<100; i++) {
    // insert new users
}