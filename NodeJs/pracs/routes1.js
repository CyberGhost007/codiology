/*jshint esversion: 7 */
/*jshint -W030 */

const handler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Title of the Webpage</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Sendd</button></form></body>');
        res.write('</html>');
        return res.end;
    }

    if (url === '/create-user' && method === 'POST') {
        const resBody = [];

        req.on('data', (chunk) => {
            resBody.push(chunk);
        });

        req.on('end', (err) => {
            const bufferBpdy = Buffer.concat(resBody).toString();
            const username = bufferBpdy.split('=')[1];
            console.log(username);
        });
    }
};

exports.handler = handler;