import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
	{
		title: 'React',
		url: 'http:www.baidu.com',
		author: 'Jordan walke',
		points: 4,
		objectID: 0,
	}, {
		title: 'Redux',
		url: 'http:www.baidu.com',
		author: 'Finch',
		points: 4,
		objectID: 1,
	}
];


// ES6
const isSearched = (searchTerm) => (item) =>
!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: list,
		}
	}

	onDismiss(id) {
		// 这边的是纯函数的操作
		const isNotId = item => item.objectID !== id;
		const updateList = this.state.list.filter(isNotId);

		this.setState(
			{
				list: updateList,
				searchTerm:'',
			}
		);

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event) {
		this.setState({
			searchTerm: event.target.value
		});

	}



	render() {
		var helloworld = 'Welcome to my finch world';
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>{helloworld}</h2>

					<form>
						<input type="text"
							   onChange={this.onSearchChange}
						/>
					</form>
					{
						this.state.list.filter(isSearched(this.state.searchTerm)).map( item =>{
							return (
								<div>
                                <span>
                                 <a href={item.url}> {item.title}</a>
								</span>
									<span>{item.author} </span>
									<span>{item.points} </span>
									<span> {item.objectID} </span>
									<span>
									<button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button>
								</span>
								</div>
							);
						})
					}
				</div>

			</div>
		);
	}
}

export default App;
