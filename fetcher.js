const fs = require('fs');// Use Node's fs (file system) module to write the file
const request = require('request'); // install and use the request library to make the HTTP request
// access to command line for Node.js
const url = process.argv[2]; // the third element
const filePath = process.argv[3]; // the forth element

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) { // status code 200 success
    console.error('Status:', response.statusCode);
  } else { // to write to files in Node.js is to use the fs.writeFile() API.
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error('Error saving the file:', error);
      } else {// file written successfully
        const fileSize = body.length;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});


