/*jshint esversion: 7 */
/*jshint -W030 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//? app.post, app.get and app.use for both get & post request

app.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/add-user', (req, res, next) => {
    res.send('<form action="/users" method="POST"><input type="text" name="title"><button>Add User</button></form>');
});
app.use('/', (req, res, next) => {
    console.log('Landing');
    res.send('<h1>Landing section</h1>');
});

app.listen(3000);
