import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={term:''};
	}
render(){
	return (
		<div className="search-bar">
		<input value={this.state.term} 
		onChange={event => this.onInputChange(event.target.value) }/>
		</div>
		
		);

}
onInputChange(term){
	this.setState({term});
	this.props.onSearchTermChange(term);
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