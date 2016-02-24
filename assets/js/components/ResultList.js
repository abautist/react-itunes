var React = require('react');
var ResultItem = require('./ResultItem');

var ResultList = React.createClass({
	render: function() {
		var resultItems = this.props.data.map(function(item, idx){
			return <ResultItem key={idx} data={item} />;
		});
		return (
				<div>
					{resultItems}
				</div>
			)
	}
});

module.exports = ResultList;
