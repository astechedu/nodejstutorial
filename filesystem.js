var http = require('http');
var fs = require('fs');

/*
http.createServer(function (req, res) {

    fs.readFile('file01.html', function(err, data) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(data);

    return res.end();

  });

}).listen(8080); 
*/

/*
fs.appendFile('file02.txt', 'Hello content!', function (err) {

  if (err) throw err;

  console.log('Saved!');

});
*/

/*
fs.appendFile('file02.txt', ' Ajay Sisaudiya.', function (err) {

  if (err) throw err;

  console.log('Updated!');
}); 
*/

/*
fs.rename('file02.txt', 'myfile02.txt', function (err) {

  if (err) throw err;

  console.log('File Renamed!');
}); 
*/


fs.unlink('myfile02.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});














