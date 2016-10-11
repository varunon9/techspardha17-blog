/**
 * Created by varun on 11/10/16.
 */

var mysql = require('mysql');
var config = require('../config');

var connection = mysql.createConnection({
    host: config.mysqlHost,
    user: config.mysqlUsername,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});

module.exports = connection;