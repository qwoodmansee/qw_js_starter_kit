import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

var port = 3000;
var app = express();

app.use(express.static('docs'));
app.use(compression());

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(request, response) {
  // hard coded for simplicity and to use for testing
  response.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
