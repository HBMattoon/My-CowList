
var express = require('express');
var partials = require('express-partials');
const bodyParser = require('body-parser');
const Promise = require ('bluebird')
const db = require('./database/db')
const getReqBody= require('./tools');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('this is the apps');

app.get('/api/cows',(req, res) => {
  var query = `select * from cows`
  db.queryAsync(query, (err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result);

    res.status(200).send(result);
  })

})

app.post('/api/cows', (req, res) => {
  var name = req.body.name || 'unknown cow';
  var description = req.body.description || 'no descriptionj given';

  db.queryAsync(`
    INSERT INTO cows (name, description) values ('${name}', '${description}');
  `);
  //res.body = req.body;
  console.log('inserted name: ' + req.body.name + ' description: ' + req.body.description);
  res.status(200).send(req.body);
})

module.exports = app;