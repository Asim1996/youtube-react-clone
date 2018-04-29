import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY ='AIzaSyBTjv-uGMlDKPyj_cnzctyOM3D-ZUBCNdQ';
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			selectedVideo:null};
		this.videoSearch('greenday');
	}
		videoSearch(term) {
			YTSearch({key:API_KEY,term:term},(videos) => {
		this.setState(
			{
				videos:videos,
				selectedVideo:videos[0]

			});
		
		// console.log(this.state.videos);
		// this.setState({videos:videos});
});
}
render(){
   return (
	<div>
		<SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
		<VideoDetail video={this.state.selectedVideo}/>
		<VideoList onvideoSelect = {selectedVideo => this.setState({selectedVideo})}
					 videos ={this.state.videos}  />
	</div>
	);
}}

ReactDOM.render(<App/>, document.querySelector('.container'));