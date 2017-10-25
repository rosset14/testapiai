'use strict';

// Make sure to install these dependencies!
// Instructions are in the README.
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.all('/', function (req, res){
	console.log("hello");
	var response = "Réponse du serveur";
	res.setHeader('Content-Type', 'application/json');
	//response += req.body.result.parameters."geo-city";
	res.send(JSON.stringify({
		speech : response, 
		displayText : response, 
		data:{},
            contextOut:[],
            source:"webhook"}));
});

app.listen((process.env.PORT || 3000), function (){
	console.log("started!")
});
