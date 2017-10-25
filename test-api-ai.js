'use strict';

// Make sure to install these dependencies!
// Instructions are in the README.
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.all('/', function (req, res){
	console.log("hello");
	var response = "Réponse du serveur : ";
	res.setHeader('Content-Type', 'application/json');
	if(req.body.result.metadata.intentName === "my_weather") response += "météo ";
	else response += "durée " + req.body.result.parameters.transport;
	response += " " + req.body.result.parameters.geocity;
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
