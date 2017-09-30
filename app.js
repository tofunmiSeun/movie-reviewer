var Twitter = require('twitter');
// Loading local environmental variables
require('dotenv').config();

var twitterClient = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
 
var stream = twitterClient.stream('statuses/filter', {track: 'spider man'});

stream.on('data', function(tweet) {
	if (!tweet.retweeted_status){
		console.log('\nNext tweet');
    	console.log(tweet.text);
	}
  });

stream.on('error', function(error) {
    console.log(error);
  });
