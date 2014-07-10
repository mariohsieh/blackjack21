// dependencies //
var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);
	
// configuration //
var port = Number(process.env.PORT || 9099);
app.configure(function() {
	app.set('view engine', 'html');
	app.set('views', __dirname + '/public/views');
	app.use(express.logger('dev'));
	app.use(express.static(__dirname + '/public'));
	
});

// routes //
app.get('/', function(req,res) {
	res.sendfile('./public/index.html');
});

// socket.io //
//require('./io')(app,io);

// open server //
app.listen(port);
console.log("App running on localhost:9099");
