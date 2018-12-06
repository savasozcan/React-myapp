import React from 'react';

class NewsForm extends React.Component {
	addButton() {
		console.log('Added');
	}

	render() {
		return(
			<div>
				<button onClick={this.addButton}>Add</button>
			</div>
		)
	}
}

export default NewsForm;
