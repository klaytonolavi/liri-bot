// activate twitter npm and get keys from twitterkeys
var Twitter = require('twitter');
var keys = require('./keys' );
// var twitterKeys = require('./keys.js');

// var spotifyKeys = require('./keys.js');
var Spotify = require('node-spotify-api');

// activate request npm, fs npm and moment npm
var request = require('request');
var fs = require("fs");
var moment = require("moment");

// variables for inputing movie names, spotify songs and for commands
var titleName = process.argv[3];
// var spotifySong = process.argv[3];
var command = process.argv[2];

//twitter npm function for when the command is my-tweets, displays up to last 20 tweets and their timestamps
if (command === "my-tweets") {
  
  // gets the twitter keys from keys.js and gives parameters of screen name and tweet count.
  var client = new Twitter(keys.twitterKeys);
  var params = {
    screen_name: "KLiekkio",
    count: 20
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    // checks for an error
    if (error) throw error;
    // if no error than run through tweets
    if (!error) {
      // for loop that looks through my tweets and displays them with timestamp through moment
      for (var i = 0; i < tweets.length; i++) {
        console.log("\n-----" + tweets[i].text + "-------" +" (" + moment(tweets[i].created_at, "ddd MMM D HH:mm:ss ZZ YYYY").format("MMMM D, YYYY; h:mm a") + ")");
      }
    }
  });
}
// checks command for spotify 
if (command === "spotify-this-song") {
  // use spotify API to post song information
  var spotify = new Spotify(keys.spotifyKeys);
  function goSpotify() {
    spotify.request("https://api.spotify.com/v1/search?q=track:"+titleName+"&type=track&market=US")
      .then(function(data) {
        if (!process.argv[3]){
          titleName = "The Sign";
        } else {
        console.log (data.tracks.items[0].name + " is by " +
          data.tracks.items[0].artists[0].name + " on the " +	
          data.tracks.items[0].album.name + " album");				
        console.log("Song link: " + data.tracks.items[0].preview_url);		
        }
      })
      .catch(function(err) {
        console.error('Error occurred: ' + err);
      });
  }
    goSpotify();
    // checks for command for movie-this
} if (command === "movie-this") {
  var nodeArgs = process.argv;
  var titleName = "";

  // for loop to check length of movie name and make sure user can input more than one word movie
  // if no movie is entered - search mr nobody by default.
  if (!process.argv[3]) {
    titleName = "Mr.+Nobody";
  } else {
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            titleName = titleName+ "+" + nodeArgs[i];
        } else {
            titleName += nodeArgs[i];
        } 
    }
  }
     
      // request from omdb and takes title name to search for movies 
  request("http://www.omdbapi.com/?t=" + titleName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {
    
      // console logging all of the information we want from the body
        console.log("---------------------------------------");
        console.log("The title of the film is: " + JSON.parse(body).Title);
        console.log("---------------------------------------");
        console.log("The film was released in: " + JSON.parse(body).Year);
        console.log("----------------------------------------");
        console.log("The IMBD Rating for the film is: " + JSON.parse(body).imdbRating);
        console.log("----------------------------------------");
        console.log("The Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
        console.log("-----------------------------------------");
        console.log("This film was made in: " + JSON.parse(body).Country);
        console.log("-----------------------------------------");
        console.log("This film language is: " + JSON.parse(body).Language);
        console.log("------------------------------------------");
        console.log("The plot of this film is: " + JSON.parse(body).Plot);
        console.log("------------------------------------------");
        console.log("The actors in this movie are: " + JSON.parse(body).Actors);
        console.log("------------------------------------------");
      } 
    });
    // checks command for do-what-it-says
} if (command == "do-what-it-says") {
  
    // reads the file from random.txt and console logs if there is an error
       fs.readFile('./random.txt', 'utf8', (err, data) => {
           if (err) throw err;
           console.log(data);
       });
   }
  
   // function to log the data in the console log. adds a line break
   function logData(data) {
       console.log(data);
       data = data + "\n";
       fs.writeFile('log.txt', data, {
           flag: 'a',
           encoding: 'utf-8'
       }, (err) => {
           if (err) throw err;
       });
   }



