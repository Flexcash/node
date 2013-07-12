var express = require('express')
  , app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});


app.get('/hola', function(req, res) {
  res.send('fuck you');
});

app.listen(3000)