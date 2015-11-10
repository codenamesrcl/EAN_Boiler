var _batchSet = [
	"scripts/**/*.js",
	"tests/**/*.js"
];


var gulp = require('gulp');
var batch = require('gulp-batch');
var Server = require('karma').Server;
var browserSync = require('browser-sync').create();
var moment = require('moment');

gulp.task("test", ['devtest']);

/**
* Run test once and exit
*/
gulp.task('devtest', function (done) {
	try{
		browserSync.init({
	        server: {
	            baseDir: "./test/results",
	            index: "index.html"
	        },
	        port: 23455
	    });

		var server = setupQuickServer();

		gulp.watch(_batchSet, batch({timeout: 1000}, function(events, done) {
           	runServer(server);
           	done();
        }))

		runServer(server);
	}
	catch(err){
		console.error(err);
	}
});

gulp.task("fulltest", function(done){
	try{
		browserSync.init({
	        server: {
	            baseDir: "./test/results",
	            index: "index.html"
	        },
	        port: 23456
	    });

		var server = setupFullServer();

		gulp.watch(_batchSet, batch({timeout: 1000}, function(events, done) {
           	runServer(server);
           	done();
        }))

		runServer(server);
	}
	catch(err){
		console.error(err);
	}
})




function setupQuickServer(){
	var config = {
		configFile: __dirname + '/test/karma.conf.js',
		singleRun: true,
		browsers: [
	        "PhantomJS"
	    ],
	}
	
	return setupServer(config);
}

function setupFullServer(){
	var config = {
		configFile: __dirname + '/test/karma.conf.js',
		singleRun: true,
	}

	return setupServer(config);
}

function setupServer(config){
	var karmaServer = new Server(config, 
		function(){
			console.log("karma server run completed");
		});

	karmaServer.on("run_complete", function(browsers, results){
		browserSync.reload();
		console.log(moment().format("hh:mm:ss"));
		console.log('run complete');
		console.log(results);
	})

	return karmaServer;
}

function runServer(server){
	server.start();
}