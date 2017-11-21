var http = require('http')

var port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var server = http.createServer(function( req, res) {
    console.log('request!!');
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    
})

console.log('Initializing Server on ' + ip + ':' + port);

server.listen(port,ip, function(){
	var address = server.address();
	console.log('Server running on ' + address.address + ':' + address.port);
});