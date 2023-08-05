let http = require('http')
let fs = require('fs')
let url = require('url')

http.createServer(function(req, res){
    let name = new url.URL('http://localhost' + req.url).pathname
    console.log('URL = ' + req.url + ' - Name = ' + name)
    if (name == undefined){
        name = '/world'
    }
    if (name == '/burningbird'){
        let file = 'phoenix.png'
        fs.stat(file, function(err, stat){
            if (err) {
                console.error(err)
                res.writeHead(404, {'Content-Type': 'text/plain'})
                res.end('Error getting burningburd')
            } else {
                let img = fs.readFileSync(file)
                res.contentType = 'image/png'
                res.contentLength = stat.size
                res.end(img, 'binary')
            }
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Path request: ' + name)
    }
}).listen(8124)