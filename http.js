var http = require('http');
//create a server object:

const port = 4000;

http.createServer(function(req, res){
	res.write("Hi, Ajay Sisaudiya...");	   //write a response to the client
	res.end();                             //end the response
}).listen(port);                           //The server object listens on port 8080... 

console.log("The server object listens on port " + port + "...")

