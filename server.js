require('dotenv').config();

const express = require('express');
const mysql = require('mysql');

const app = express();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

app.get('/api/temps', (req, res) => {
  let db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  });

  let sql = 'SELECT * FROM cities';
  let temps = [];

  db.query(sql, (err, result) => {
    console.log(result);
    result.forEach((item) => {
      const { city, temp } = { item };
      temps.push({ city, temp });
    });

    res.send(temps);
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
