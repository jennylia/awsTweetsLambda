var express = require('express');
var app = express();
var request = require('request'); // reference for simple GET request
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'tGBKVCeM0FDXevfI1oXhYJ07l',
    consumer_secret: 'Rc8t8Wi6c37STYb2LNH7CcsBpDdt43EIZLQ1t7AOLWDZejdcyk',
    access_token_key: '2419944637-bHtuGboyXYfsF9JBkHdYddOaolygNutZwyipyYw',
    access_token_secret: 'ZwInM3KJirA9s79RvkdiOtXxxgpbpM7cv6utKJT6vDzfT'
});

app.get('/', function (req, res) {
    var params = {screen_name: 'awscloud'};
    var newTweet = {};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets[0].text);
            newTweet = tweets[0].text;
        }
    });

    res.send({
        "Output": newTweet
    });
});

app.post('/', function (req, res) {
    res.send({
        "Output": "Hello World!"
    });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
