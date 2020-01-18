// install forever: [sudo] npm install -g forever
// run yify-pop: forever start yifystart.js

var geddy = require('geddy');

geddy.startCluster({
  	// Configuration here
  	port: process.env.PORT || '4000',
  	environment: process.env.NODE_ENV || 'development'
});
