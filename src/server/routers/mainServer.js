var _express = require("express"),
	router = _express.Router(),
	_mimetypes = require("mime-types"),
	_path = require('path'),
	_normalize_path = require('normalize-path');

//express setups
var _body_parser = require('body-parser'),
    //multipart form body handler (for form handling)
    _multer  = require('multer');

//libs
var _ = require("lodash");


router.use(_body_parser.json()); // for parsing application/json
router.use(_body_parser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//use multer to parse multipart/form-data bodies,
//this is especialy true with file uploads
//we buffer the form contents into memory so we don't have to access
//the filesystem
router.use(_multer({inMemory:true}));

//setup the router

router.get('/', function(req, res) {
	res.render('app/index');
});

module.exports = router;
