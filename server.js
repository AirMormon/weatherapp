
var express = require('express');
//var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public')); //That's a double underscore

// app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log(port)
});

// app.post('/addTown', function (req, res) {
//   var cit = req.body
//   console.log(cit);
//   res.send(cit);
// })
