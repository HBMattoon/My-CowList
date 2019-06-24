// var express = require('express')
//   , patials = require('express-partials')
//   , app = express();


// app.use(partials());

var express = require('express');
var partials = require('express-partials');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('this is the apps');

app.get('/api/cows',(req, res) => {
  console.log(req.body);
  res.status(200).send('this it a test')
})

app.post('/api/cows', (req, res) => {
  console.log(req.body);
  res.status(200).end();
})

module.exports = app;