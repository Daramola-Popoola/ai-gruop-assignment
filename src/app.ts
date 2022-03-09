import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("welcome class 2022");
}).listen(2121, () =>{
    console.log(`welcome to the new portal 2121`);
})