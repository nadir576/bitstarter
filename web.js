var fs = require("fs");
var filesname = "index.html"

var express = require('express');

var data = fs.readFileSync(filesname,"utf8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {


  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});