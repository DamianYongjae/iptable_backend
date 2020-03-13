const cors = require("cors");
const express = require("express");
const mysql = require("mysql");

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "Aa12345!!",
  database: "Iptable"
});

app.use(cors());

app.listen(() => {
  console.log(`App server now listening on port 3306`);
});

app.get("/", (req, res) => {
  const { table } = req.query;

  pool.query(`select * from ${table}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(results);
      return res.send(results);
    }
  });
});

pool.query(`select * from ips`, (err, results) => {
  if (err) {
    throw err;
  } else {
    console.log(results);
  }
});
