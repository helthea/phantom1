console.log('Loading');
var page = require('webpage').create();
var url = 'http://s3.amazonaws.com/birdkage/experiments.html';
page.open(url, function (status) {
  //Page is loaded!

  console.log('starting render');

  // Set the timeout
  var mins = 120;
  setTimeout(function(){
    console.log('render complete');
    phantom.exit();
  },1000 * 60 * mins);

});
