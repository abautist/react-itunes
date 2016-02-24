var React = require('react');
var SearchBox = require('./SearchBox');
var ResultList = require('./ResultList');

var MusicSearch = React.createClass({
	getInitialState: function() {
		return {results: [], message: ""};
	},
	doSearch: function(term) {
		this.setState({results: [], message: "Loading..."});
		var self = this;
		$.ajax({
			url: '/itunes/search',
			method: 'GET',
			data: {term: term}
		}).done(function(data){
			console.log(JSON.parse(data));
			self.setState({results: JSON.parse(data).results})
		});
	},
	render: function(){
		return (
			<div>
				<h1>Music Search</h1>
				<SearchBox search={this.doSearch} />
				<ResultList data={this.state.results} />
				<h1>{this.state.message}</h1>
			</div>
		)
	}
});

module.exports = MusicSearch;