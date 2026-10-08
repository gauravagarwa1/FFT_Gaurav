// var a=10
// let b=20
// console.log("The sum of a and b is :");
// console.log(a+b);

// import fs from "fs";
// const fs = require("fs");
// fs.writeFileSync("sample.txt","Bonjuro Sherni!!");
// console.log("Fille Created"); 


// const os = require("os");
// console.log(os.platform());

// import http from "http";
// const http = require("http");

// const server = http.createServer((req,res) => {
//     res.end("Hello i am Node Js server")
// });
// server.listen(3000);
// console.log("server is running on http://localhost:3000");

const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    fs.readFile("09.html",(err,data)=>{
        res.end(data);
    });
});
server.listen(5000);
console.log("This is http://localhost:5000");

