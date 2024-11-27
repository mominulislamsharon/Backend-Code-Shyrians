// const fs = require('fs');
//------create file------
// fs.copyFile("hello.txt", "./copy/chaca.txt", function (err){
//   if(err) console.log(err);
//   else console.log("done");
// });

//-------delete file------
// fs.rm("./copy", {recursive: true}, function(err){
//   if(err) console.log(err);
//   else console.log("deleted");
// });


//-------server running---------------
const http = require('http');

const server = http.createServer(function(req, res) {
  res.end("hello server!");
})

server.listen(5000);