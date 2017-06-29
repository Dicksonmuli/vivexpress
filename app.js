var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
	res.send('Express working now');
});

var firebase = require('firebase');
  require('firebase/auth');
  // require('firebase/database');
  // Initialize Firebase for the application
  // var config = {
  //     apiKey: process.env.apiKey,
  //     authDomain: process.env.authDomain,
  //     databaseURL: process.env.databaseURL,
  //     storageBucket: process.env.storageBucket,
  //     messagingSenderId: process.env.messagingSenderId
  //   };

  firebase.initializeApp({
		// config,
		serviceAccount: "./vivexpress-service-account.json",
		databaseURL: "https://vivexpress-96b69.firebaseio.com"});

var message = {text: "Hello world", timestamp: new Date().toString()};
var ref = firebase.database().ref('node-client');
var messageRef = ref.child('messages');
var logsRef = ref.child('logs');

logsRef.child(messageRef.key).set(message);

messageRef.orderByKey().limitToLast(1).on('child_added', function (snap) {
	logsRef.child('count').transaction(function (i) {
		return i + 1;
	})
})

// messageRef.push({
// 	name: 'Chris',
// 	admin: true,
// 	count: 1,
// 	text: 'I am admin'
// })
app.listen(app.get('port'), function() {
	console.log('Express started on port 8080');
});
