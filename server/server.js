var express = require('express');
var app = express();
//var app = connect().use(connect.static('public')).listen(3000, "0.0.0.0");
var fs = require("fs");

const testFolder = '../data/sample/images_rendered/images_gold/';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/images', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    fs.readdir(testFolder, function(err, files) {
      console.log("front end is getting images' names.");
      files.forEach(function(file) {
        res.end(JSON.stringify(files));
      });
    });
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});
