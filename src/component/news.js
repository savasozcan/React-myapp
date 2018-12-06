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
import PropTypes from 'prop-types';

class News extends React.Component{
	static propTypes = {
		news: PropTypes.array.isRequired
	}

	render() {
		const elements = this.props.news.map(news => <NewsItem key={news.id} title={news.title} description={news.description}/>)
		let nameAdd = 'Savaş';
		return(
			<div>
				{/*{ 2 + 2 === 4 ? 'evet' : 'hayır' }*/}
				{/*{nameAdd}*/}
				{ elements }
			</div>
		);
	}
}

export default News;
