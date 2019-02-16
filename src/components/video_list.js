import React from 'react';

const VideoList =(props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.props}
        </ul>
    );
}

export default VideoList;