/*
	consider adding the compression library to this template
	since it's a standard gzip compression library for express

	https://www.npmjs.com/package/compression
 */

//start the server
var http = require('http');
var server_options = {
	host: 'localhost',
	port: 13000
};


var express = require('express'),
	express_hbs  = require('express-handlebars'),
	compression = require('compression');

var app = express();

//routers
var mainRouter = require('./server/routers/mainServer');


function startServer(){
	//setup to use express-handlebars
	app.set('views', './server/views');
	app.engine('.hbs', express_hbs({
		defaultLayout: 'main',
		extname: '.hbs',
		layoutsDir: './server/views/layouts',
		partialsDir: './server/views/partials',
	}));

	app.set('view engine', 'hbs');

	//setup static file root locations
	app.use(express.static('assets'));
	app.use(express.static('bower_components'));

	//setup gzip compression
	app.use(compression());

	app.use('/app', mainRouter);


	//start the app server
	var server = app.listen(server_options.port, function () {

	  	var host = server.address().address;
	  	var port = server.address().port;

		console.log('App listening at port %s', port);
	});

}


//check if server is already running
http.get(server_options, function(res) {
	console.log('server is running, no need to start it up again');
}).on('error', function(e) {
	startServer();
});