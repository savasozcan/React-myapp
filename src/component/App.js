import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './news';
import NewForm from  './newsForm'

class App extends Component {
  render() {
  	const news = [
			{
				id: 1,
				title: "title 1",
				description: "description 1"
			},
			{
				id: 2,
				title: "title 2",
				description: "description 2"
			},
			{
				id: 3,
				title: "title 13",
				description: "description 3"
			}
		]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
        </header>
				<News/>
      </div>
    );
  }
}

export default App;
