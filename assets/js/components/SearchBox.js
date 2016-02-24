var React = require('react');

var SearchBox = React.createClass({
	getInitialState: function() {
		return: {searchTerm: ""};
	},
	changeSearchField: function(e) {
		this.setState({searchTerm: e.target.value});
	},
	passSearchTerm: function(e) {
		e.preventDefault();
		this.props.search(this.state.searchTerm);
	},
	render: function(){
		return (
			<div>
				<form onSubmit={this.passSearchTerm}>
					<input type="text" placeholder="example: Modest Mouse" value={this.state.searchTerm} onChange={this.changeSearchField} className="form-control" />
				</form>
			</div>
			)
	}
});

module.exports = SearchBox;