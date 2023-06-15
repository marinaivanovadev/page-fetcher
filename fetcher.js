const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];



const conn = net.createConnection({
  host: 'http://www.example.edu/',
  port: 80
});
conn.setEncoding('UTF8');


