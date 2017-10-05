var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var moment = require("moment");
var Sequelize = require("sequelize");
var mysql = require('mysql');

var PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));
app.use(express.static(path.join(__dirname,'app/public')));



// Import routes and give the server access to them.
console.log(require("./app/routing/apiroutes.js")(app));
console.log(require("./app/routing/htmlroutes.js")(app));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
