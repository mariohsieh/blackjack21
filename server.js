// dependencies //
var express 				= require('express'),
		app 						= express(),
		morgan					= require('morgan'),
		bodyParser			= require('body-parser'),
		methodOverride	= require('method-override'),
		http 						= require('http').Server(app),
		io 							= require('socket.io')(http);


// configuration //
var port = Number(process.env.PORT || 9099);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


// routes //
app.get('/', function(req,res) {
	res.sendfile('./public/index.html');
});


// socket.io //
//require('./io')(app,io);


// open server //
app.listen(port, function(err) {
	if (err) throw err;
	console.log("App running on localhost: " + port);
});
