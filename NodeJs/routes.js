/*jshint esversion: 7 */
/*jshint -W030 */

const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Title of the Webpage</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="anyMsg"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end;
    }

    if (url === '/message' && method === 'POST') {
        const reqBody = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            reqBody.push(chunk);
        });
        return req.on('end', () => {
            const bufferBody = Buffer.concat(reqBody).toString();
            const message = bufferBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end;
            });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Title of the Webpage</title></head>');
    res.write('<body>First server created with NodeJs</body>');
    res.write('</html>');
    res.end;
};

//? Exporting the Function for external user: Method 1
// module.exports = requestHandler;

//? Exporting the Function for external user: Method 2 Multi-Export
module.exports = {
    handler: requestHandler,
    demo: 'Demo text',
};

//? Exporting the Function for external user: Method 3 Multi-Export
exports.handler = requestHandler;
exports.demo = 'Demo Text';
