require('./server/app').listen(8000, '127.0.0.1');
const db = require('./server/database/db');
const port = 8000;
console.log('Listening on port 8000...');