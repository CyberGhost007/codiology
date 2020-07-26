/*jshint esversion: 7 */
/*jshint -W030 */

// const http = require('http');
const express = require('express');
// const handler = require('./routes1');
const app = express();

app.use('/users',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello Users ExpressJs</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello from ExpressJs</h1>');
});

app.listen(3000);

// const server  = http.createServer(app);

// server.listen(3000);