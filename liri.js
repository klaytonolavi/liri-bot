// var twitter = require('twitter');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require('request');

var movieName = process.argv[3];
// var tweets = process.argv[3];
var spotifySong = process.argv[3];

// var twitterClient = new Twitter({
//     consumer_key: keys.consumer_key,
//     consumer_secret: keys.consumer_secret,
//     access_token_key: keys.access_token_key,
//     access_token_secret: keys.acces_token_secret
//   });
 
  // spotify keys from keys.js
var spotify = new Spotify({
      id: keys.id,
      secret: keys.secret
  });

  // var params = {screen_name: 'nodejs'};
  // client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //   if (!error) {
  //     console.log(tweets);
  //   }
  // });


if (process.argv[2] === "my-tweets") {
  // use twitter API to post last 20 tweets
} if (process.argv[2] === "spotify-this-song") {
  // use spotify API to post song information
  spotify.search({spotifySong}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
} if (process.argv[2] === "movie-this") {
  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
    
      // console logging all of the information we want from the body
        console.log("The title of the film is " + JSON.parse(body).Title);
        console.log("The film was released in " + JSON.parse(body).Year);
        console.log("The IMBD Rating for the film is " + JSON.parse(body).imdbRating);
        console.log("The Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
        console.log("This film was made in " + JSON.parse(body).Country);
        console.log("This film language is " + JSON.parse(body).Language);
        console.log("The plot of this film is " + JSON.parse(body).Plot);
        console.log("The actors in this movie are " + JSON.parse(body).Actors);
      }
    });
} if (process.argv[2] === "do-what-it-says") {
  // taking text inside random.txt and calling command to run spotify-this-song for the song in random.txt
}


