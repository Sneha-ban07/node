const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
})
app.get("/test", (req, res) => {
    if (req.query.name === undefined || req.query.age === undefined) {
        res.send("Please provide name and age");
    }
    res.send(`hello ${req.query.name}, you are ${req.query.age} years old`);
})
app.listen(8084, () => {
    console.log("Server is running on port 8084");
});