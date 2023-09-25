const mysql = require('mysql')
const dotenv = require("dotenv");


dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
    host: 'localhost',
  user: 'root',
  password: `${process.env.PASS}`,
  database: 'petpals',
})

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });

module.exports = db;


