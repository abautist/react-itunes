var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', function(req,res){
	res.send({data: [1,2,3,4]});
});

app.get('/itunes/search', function(req,res) {
	var query = {
		term: req.query.term
	};
	request({url: 'https://itunes.apple.com/search', qs: query},
		function(err, response, body) {
			if(!err && response.statusCode === 200) {
				res.send(body)
			} else {
				res.render('error');
			}
		});
});

app.listen(3000);