const path = require('path');


//var baseName = path.basename('/nodejstutorial/http.js');
//var dirName = path.dirname('/nodejstutorial/dir1/dir2/http.js');

//var extName = path.extname('/nodejstutorial/http.js');

//console.log("BaseName: " + baseName);

//console.log("DirName: " + dirName);

//console.log("ExtName: " + extName);


var pathParse = path.parse('/nodejstutorial/dir1/dir2/http.js');

console.log(pathParse);