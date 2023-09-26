const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3307
})