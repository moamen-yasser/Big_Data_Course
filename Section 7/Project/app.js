const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile("./views/home.html", {root: __dirname});
})

app.listen(port, () => {
    console.log(`http://localhost:${port} is running`);
})

mongoose
    .connect("mongodb://localhost:27017/myapp")
    .then(() => {
        app.listen(port, () => {
        console.log(`http://localhost:${port} is running`);
    })
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });