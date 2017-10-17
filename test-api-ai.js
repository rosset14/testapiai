'use strict';

// Make sure to install these dependencies!
// Instructions are in the README.
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

app.all('/', function (req, res){
	console.log("hello");
	var response = "Réponse du serveur";
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({
		speech : response, 
		displayText : response, 
		data:{
                google:{
                    expect_user_response: false,
                    final_response: {
                        speech_response: {
                        text_to_speech: response
                        }
                    }
                }
            },
            contextOut:[],
            source:"webhook"}));
});

var server = app.listen(3000, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});
