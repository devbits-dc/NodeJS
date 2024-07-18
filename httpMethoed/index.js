const fs = require("fs");
const http = require("http");
const url = require("url");

function myHandler(res, req) {
    const log = `${Date.now()}, ${req.url},${req.method} req receive\n`;
    const myUrl = url.parse(req.url, true);
    if (req.url === "/favicon.ico") return res.end();
    fs.appendFile("log.tex", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method == "GET") {
                    res.end("HomePages");
                }
                break;
            case "/about":
                const userName = myUrl.query.myname;
                res.end(`${userName}`);
                break;
            default:
                res.end("404");
                break;
        }
    });
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => console.log("start !"));