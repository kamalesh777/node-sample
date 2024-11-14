var express = require('express');
var app = express();

app.use(express.json())
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;
