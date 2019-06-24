const mysql = require('mysql');
const Promise = require ('bluebird')

const connection = mysql.createConnection({
  user: 'root',
  password: ''
})

const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()

  .then(() => {
    console.log('creating cowlist')
    db.queryAsync(`
      CREATE DATABASE IF NOT EXISTS cowlist;
    `);
  })
  .then(()  => {
    console.log('using cowlist')
    db.queryAsync(`
      USE cowlist;
    `);
  })
  .then(() => {
    console.log('creating new table')
    return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS cows(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NULL DEFAULT NULL,
      description VARCHAR(255)
    );`)
  })
  .then(()=>{
    console.log('end of DB creation')
  })

module.exports = db;