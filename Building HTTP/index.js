// const http = require("http");

// const myServer = http.createServer((req, res) => {
//     console.log("new req rec.");
//     res.end("hello from Server");
// });

// myServer.listen(8120,()=>{console.log("Server Started !")})


const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}new req receive\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("kya hai");
    });
});

myServer.listen(8000, () => console.log("server started !"));