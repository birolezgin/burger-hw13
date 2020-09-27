var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nqyobgqys14vn98k",
    password: "e6o1t87ywtogiljr",
    database: "	ujy7f2aj4b9m98nj" 
});
};

connection.connect();

module.exports = connection;