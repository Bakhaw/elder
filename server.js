let http = require('http');

http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write('Bonjour!');
res.end();
}).listen(1024);
