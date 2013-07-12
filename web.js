var fs = require("fs");
var filesname = "index.html"

var express = require('express');
var data = fsreadFileSync(filesname,"utf8");
var buffer = new Buffer(data.size)
	var data1 = buffer.toString(buffer);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {


  response.send(data1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});