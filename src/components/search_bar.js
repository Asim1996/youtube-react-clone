import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={term:''};
	}
render(){
	return (
		<div>
		<input onChange={event => this.setState({term:event.target.value}) }/>
		</div>
		
		);

}

// w/o arrow function
// render() {
// 	return <input onChange={this.onInputChange} />
// }
// onInputChange(event){
// console.log(event);
// console.log(event.target.value);
// }

}

// const SearchBar = () => {
// return <input />
// };

export default SearchBar;