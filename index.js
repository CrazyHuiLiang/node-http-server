const http = require('http');

let count = 0;
const server = http.createServer((req, res) => {
//    console.log(++count);
    res.end('hello world');
});
server.listen(666);


