const mysql = require('mysql');

const dbCredentials = {
    host: 'localhost',
    user: 'root',
    password: 'goldtree9',
    database: 'users'
};

const connection = mysql.createConnection(dbCredentials);

connection.connect(error => {
    if(error) throw error;
    console.log("successfully connected to database");
})

module.exports = connection;