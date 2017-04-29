//Requirements
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var router = require("./controllers/burgers_controller.js");


var port = process.env.PORT || 3000;
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exHandlebars = require("express-handlebars");

app.engine("handlebars", exHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

//Connection to the DB
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 8889

});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});



app.use("/", router);

app.listen(port);
