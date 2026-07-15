//buliding a simple http server with node
const http = require("http");

//creating a log file for logging the request
const fs = require("fs");

//parsing the req url
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  //console.log(req);
  //logging the date for the request
  const log = `${Date.now()}, ${req.url}, ${req.method}: new reqquest received\n`;

  const myurl = url.parse(req.url, true);
  //console.log(myurl);
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log(err);
    }
    //setting the status code and content type
    switch (myurl.pathname) {
      case "/":
        const name = myurl.query.name;
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1>Home Page - Hello ${name}</h1>`);
        break;
      case "/about":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>About Page</h1>");
        break;
      case "/signup":
        if (req.method === "GET") {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end("<h1>Signup form</h1>");
        }
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page Not Found</h1>");
        break;
    }
  });
});
//port 8000
myserver.listen(8000, () => {
  console.log("Server is running on port 8000");
});
