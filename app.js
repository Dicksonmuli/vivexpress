var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
	res.send('Express working now');
});

app.listen(app.get('port'), function() {
	console.log('Express started on port 8080');
});
