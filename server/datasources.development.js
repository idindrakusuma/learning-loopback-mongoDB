'use strict';
require('dotenv').config();

console.log(process.env.DB_NAME);

module.exports = {
  db: {
    name: 'db',
    connector: 'mongodb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
