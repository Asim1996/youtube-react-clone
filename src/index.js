import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY ='AIzaSyBTjv-uGMlDKPyj_cnzctyOM3D-ZUBCNdQ';
YTSearch({key:API_KEY,terms:'surfboards'},function(data){
	console.log(data);
})
const App = function(){
	return (
	<div>
		<SearchBar />
	</div>
	);
}

ReactDOM.render(<App/>, document.querySelector('.container'));