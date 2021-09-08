import React from 'react';
import ContentList from '../content/contentList';

const Body = (props) => (
    <ContentList videos={props.videos} onMoreData={props.onMoreData}/>
);

export default Body;