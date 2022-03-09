
 var events = require("events");
 var eventEmitter = new events.EventEmitter();

 //var fs = require("fs");
 

//Simple event
/*

 var myEventHandler = function(){
  console.log("Event is open");
 }


 eventEmitter.on('open', myEventHandler);

 eventEmitter.emit('open');
*/



//File Creation
/*
 
 var myEventHandler = function(){
  fs.appendFile('myFileName01.html', 'This is my first file', function(err){

        if(err) throw err;
    console.log("File Created.....");
  });
 }


 eventEmitter.on('fileCreation', myEventHandler);

 eventEmitter.emit('fileCreation');
*/





//File Re-name

/*
var myEventHandler = function(){
  fs.rename('myFileName01.html', 'reNamedFile01.html', function(err){

        if(err) throw err;
    console.log("File Re-Named.....");
  });
 }


 eventEmitter.on('fileReName', myEventHandler);

*/



 //File Re-name
 var myEventHandler = function(){
  fs.unlink('reNamedFile01.html', function(err){

        if(err) throw err;
    console.log("File Deleted.....");
  });
 }
