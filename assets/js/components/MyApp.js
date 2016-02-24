var React = require('react');
var MusicSearch = require('./MusicSearch');

var MyApp = React.createClass({
	render: function(){
		return (
			<div>
				<MusicSearch />
			</div>
		);
	}
});

module.exports = MyApp;