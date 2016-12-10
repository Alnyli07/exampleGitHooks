var fs = require("fs");

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    console.log("got request.");
  res.send(fs.readFileSync("./index.html","utf8"));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});