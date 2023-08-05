let http = require('http')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Htllo World\n')
}).listen(8124)

console.log('Server running at http://localhost:8124')
