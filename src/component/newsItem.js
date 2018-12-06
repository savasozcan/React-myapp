/*
import React, { Component } from 'react';
import '../newItem.css'

class NewsItem extends Component{
	render() {
		// console.log(this.props)
		const { title, description } = this.props;
		return(
			<div>
				<h1 className="title">{ title }</h1>
				<p> { description } </p>
			</div>
		)
	}
}

export default NewsItem;
*/
import React, { Component } from 'react';
import '../NewsItemm.css'

class NewsItem extends Component{
	render() {
		const {title, description} = this.props
		return(
			<div>
				<h1 className="title">{title}</h1>
				<p>{description}</p>
			</div>
		);
	}
}

export default NewsItem;
