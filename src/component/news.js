/*
import React, { Component } from 'react';
import NewsItem from './newsItem';

class News extends Component {
	render() {
		const title = "react js";
		const description = "react description";
		// let nameElement = <div>savas</div>
		return(
			<div>
				{/!*{ 2+2 == 4 ? "evet" : "hayır" }*!/}
				{/!*{ nameElement }*!/}
				<NewsItem title={title} description={description} />
			</div>
		)
	}
}

export default News;
*/
import React from 'react';
import NewsItem from './newsItem'

class News extends React.Component{
	render() {
		const title = 'react title';
		const description = 'react description'
		let nameAdd = 'Savaş';
		return(
			<div>
				{/*{ 2 + 2 === 4 ? 'evet' : 'hayır' }*/}
				{/*{nameAdd}*/}
				<NewsItem title={title} description={description} />
			</div>
		);
	}
}

export default News;
