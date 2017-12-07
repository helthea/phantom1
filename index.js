var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

var childArgs = [
  path.join(__dirname, 'script.js')
]

// Set the interval
setInterval(function(){
  console.log('running...');
},1000 * 30);

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  console.log(err,stdout,stderr);
})
