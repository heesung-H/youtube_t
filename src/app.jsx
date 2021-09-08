import React, { useEffect, useState } from 'react';
import './app.css';
import Body from './components/config/body';
import Head from './components/config/head';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBm60VPQ6pqK_vBLbcSfs7wCSHKv9j-TN8`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []); // 값 전달 시 재 호출.

  const searchHandle = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBm60VPQ6pqK_vBLbcSfs7wCSHKv9j-TN8`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }

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
