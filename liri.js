var twitter = require('twitter');
// var Spotify = require('node-spotify-api');
// var request = require('request');

// var movieName = process.argv[2];
var tweets = process.argv[2];

// var spotifySong = process.argv[2];

// twitter client getting keys from keys.js
var twitterClient = new Twitter({
    consumer_key: 'UVEbCrCnCWHox4FImdq2Kd64u',
    consumer_secret: '5EKpmaKIRcqcja6TY9dcKydDxOxNaTn9TXI6zhuJXdGY889NtS',
    access_token_key: '907287473306296326-JBjnL7rgIEK3gysirGrgVBGVGonMTJ9',
    access_token_secret: 'Zwof6GwV0YKHYn5uQnsBgSpLqsW1F7pl6ZtLndTLyT2tx'
  });

  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });

// // spotify keys from keys.js
//   var spotify = new Spotify({
//     id: keys.id,
//     secret: keys.secret
//   });

  // ombd request with key and if statement for error handling. 
//   request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
      // If the request is successful (i.e. if the response status code is 200)
    //   if (!error && response.statusCode === 200) {
    
      // console logging all of the information we want from the body
    //     console.log("The title of the film is " + JSON.parse(body).Title);
    //     console.log("The film was released in " + JSON.parse(body).Year);
    //     console.log("The IMBD Rating for the film is " + JSON.parse(body).imdbRating);
    //     console.log("The Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
    //     console.log("This film was made in " + JSON.parse(body).Country);
    //     console.log("This film language is " + JSON.parse(body).Language);
    //     console.log("The plot of this film is " + JSON.parse(body).Plot);
    //     console.log("The actors in this movie are " + JSON.parse(body).Actors);
    //   }
    // });