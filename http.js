console.log('YO')
const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {
    //console.log(req);
    const log = `${Date.now()}, ${req.url}: new reqquest received\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.log(err);
        }
        switch(req.url){
            case '/':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>Home Page</h1>');
                break;
            case '/about':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>About Page</h1>');
                break;
            default:
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>404 Page Not Found</h1>');
                break;
        }
    });
});
myserver.listen(8000, () =>{
    console.log('Server is running on port 8000');
});