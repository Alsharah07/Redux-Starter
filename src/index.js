import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDztMM5c6jm8eX12lPp3X0NJsrVzOjMkPo';


class App extends Component { 
constructor(props) {
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({videos})
    });
    
}

    render() {
    return(
        <div>
            <SearchBar />
            <VideoList videos={this.state.vodeos} />
        </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('.container')); 