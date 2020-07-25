/*jshint esversion: 7 */
/*jshint -W030 */

const http = require('http');
const handler = require('./routes1');

const server  = http.createServer(handler.handler);

server.listen(3000);