var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
	res.send('Express working now');
});

var firebase = require('firebase');
  require('firebase/auth');
  require('firebase/database');
  // Initialize Firebase for the application
  var config = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId
    };

  firebase.initializeApp(config);

app.listen(app.get('port'), function() {
	console.log('Express started on port 8080');
});
