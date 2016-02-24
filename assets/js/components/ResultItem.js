var React = require('react');

var ResultItem = React.createClass({
	render: function(){
		var item = this.props.data;
		return (
			<div className='well'>
				<h1>{item.trackName} - <small>{item.artistName}</small></h1>
				<img src={item.artworkUrl100} />
				<audio src={item.previewUrl} controls />
			</div>
		)
	}
});

module.exports = ResultItem;
