var express = require('express');
var app = express();
var request = require('request'); // reference for simple GET request
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'xl',
    consumer_secret: 'djdcyk',
    access_token_key: '2419944637-asd',
    access_token_secret: 'asf'
});

app.get('/', function (req, res) {
    var params = {screen_name: 'awscloud'};
    var newTweet = {};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets[0].text);
            newTweet = tweets[0].text;

            res.send({
                "Output": newTweet
            });
        } else {
            res.send({
                "Output": "no tweets available"
            });
        }
    });


});

app.post('/', function (req, res) {
    res.send({
        "Output": "Hello World!"
    });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
