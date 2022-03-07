var http = require('http');


const port = 4000;

http.createServer(function(req, res){
	res.write("Hi, Ajay Sisaudiya...");	
	res.end();
}).listen(port);

console.log("The server object listens on port " + port + "...")