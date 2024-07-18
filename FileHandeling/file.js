// const fs = require("fs");


//synchronous call for write
// fs.writeFileSync('./text.txt', 'hello');


//asynchronous call for write
// fs.writeFile("./text.txt", "this is asynchronous", (err) => { "error" })


//synchronous call for read
// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res)


// asynchronous call for read
// fs.readFile("./text.txt", "utf-8", (err,res) => {
//     if (err) {
//         console.log("error",err);
//     }
//     else {
//         console.log(res);
//     }
//  })


//not update but for add data
// fs.appendFileSync("./text.txt", `hello\n`);

//copy file
// fs.cpSync("./text.txt", "./copy.txt");


//delete the file
// fs.unlinkSync("./texttxt");

//check the status
// const res = fs.statSync("./text.txt");
// console.log(res);


// create a directory
// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a/b",{recursive:true});

// const os = require("os");
// console.log(os.cpus().length);

//lecture 6 working of node js

// const fs = require("fs");
// console.log("1");
// const res = fs.readFile("./text.txt", "utf-8", (error,res) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(res)
//     }
// });

// console.log("2");


 