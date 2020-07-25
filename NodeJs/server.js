/*jshint esversion: 7 */
/*jshint -W030 */

const http = require('http');
const { Buffer } = require('buffer');

//* Importing local files/functions
const routes = require('./routes');

//? Creating a function to handle requests and send back response
// function requestHandler(req, res) { }

// //? Creating a server EXP - 1
// http.createServer(requestHandler);

// //? Creating a server EXP - 2
// http.createServer(function(req, res) {});

//! ----------------------------------------------NodeJs----------------------------------------------------- !//

//? Creating a server EXP - 3 - Latest
const server = http.createServer(routes.handler);

//? It will open the connect and keep listing to the incoming requests
server.listen(3000);

//! ----------------------------------------------NodeJs END----------------------------------------------------- !//
