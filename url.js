var url = require('url');

var adr = 'http://localhost:8080/nodejstutorial.htm?year=2022&month=march';

var q = url.parse(adr, true);

//console.log(q.host);
//console.log(q.pathname);

//var qdata = q.query; 

//console.log(q.search);

//console.log(qdata.year);
//console.log(qdata.month);

