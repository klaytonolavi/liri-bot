var Twitter = require('twitter');
var twitterKeys = require('./keys.js');
var spotifyKeys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
var moment = require("moment");

var movieName = process.argv[3];
var tweets = process.argv[3];
var spotifySong = process.argv[3];

var client = new Twitter(
    twitterKeys
  );
 
  // spotify keys from keys.js
var spotify = new Spotify(
      spotifyKeys
  );

  var command = process.argv[2];
  
  if (command === "my-tweets") {
    // use twitter API to post last 20 tweets
    var params = { screen_name: "KLiekkio" };
    
        client.get("statuses/user_timeline", params, function(error, tweets, response) {
            if (!error) {
                for (i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].text);
                }
            }
        });
    }
 if (command === "spotify-this-song") {
  // use spotify API to post song information
  spotify
  .search({ type: 'track', query: spotifySong })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  
  });
} if (command === "movie-this") {

  var nodeArgs = process.argv;
  
  var movieName = "";
  
      for (var i = 3; i < nodeArgs.length; i++) {
          if (i > 3 && i < nodeArgs.length) {
              movieName = movieName + "+" + nodeArgs[i];
          } else {
              movieName += nodeArgs[i];
          }
      }
  request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
    
      // console logging all of the information we want from the body
        console.log("The title of the film is   " + JSON.parse(body).Title);
        console.log("The film was released in  " + JSON.parse(body).Year);
        console.log("The IMBD Rating for the film is " + JSON.parse(body).imdbRating);
        console.log("The Rotten Tomatoes rating is  " + JSON.parse(body).Ratings[1].Value);
        console.log("This film was made in  " + JSON.parse(body).Country);
        console.log("This film language is  " + JSON.parse(body).Language);
        console.log("The plot of this film is   " + JSON.parse(body).Plot);
        console.log("The actors in this movie are " + JSON.parse(body).Actors);
      }
    });
} if (command === "do-what-it-says") {
  // taking text inside random.txt and calling command to run spotify-this-song for the song in random.txt
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
  }
  
  console.log("data");
  })
}


