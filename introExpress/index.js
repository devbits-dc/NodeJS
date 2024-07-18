const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.end("hello exp.")
})

app.get("/about", (req, res) => {
    return res.end(`${req.query.name}`);
})

app.listen(8000,()=>console.log("starts !"))

// {no need in express}

// const myServer = http.createServer(app);
// myServer.listen(8000,()=>console.log("start !"))