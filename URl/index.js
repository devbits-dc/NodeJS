const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.get} ${req.url} new req receive.\n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("hi, are you searching" + search);
                break;
            default:
                res.end("404 Not Found");
                
            
        }
    
    });
});

myServer.listen(8100, () =>console.log("start !") );