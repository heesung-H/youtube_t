import React, { useEffect, useState } from 'react';
import './app.css';
import Body from './components/config/body';
import Head from './components/config/head';

function App({youtube}) {

  const [videos, setVideos] = useState([]);

  const searchHandle = (query) => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos))
  }, []);

  const moreData = (pageCnt) => {
    console.log(pageCnt);
  }

  return (
    <> 
      <Head onSearch={searchHandle}/>
      <Body videos={videos} onMoreData={moreData}/>
    </>
  );
}

export default App;
