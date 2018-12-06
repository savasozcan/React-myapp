import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './news';
import NewForm from  './newsForm'

class App extends Component {
  render() {

  	const name = 'savas'
		const news = [
		{
			id: '1',
			title: 'react title 1',
			description: 'react description 1'
		},
			{
				id: '2',
				title: 'react title 2',
				description: 'react description 2'
			},
			{
				id: '3',
				title: 'react title 3',
				description: 'react description 3'
			}]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
        </header>
				<News news={news} name="savas"/>
      </div>
    );
  }
}

export default App;
