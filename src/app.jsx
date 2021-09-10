import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import Body from './components/config/body';
import Head from './components/config/head';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const searchHandle = useCallback(query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));

    //검색시 초기화
    setSelectedVideo(null);
  }, [youtube]);

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos))
  }, [youtube]);

  return (
    <>
      <div className={styles.app}>
        <Head onSearch={searchHandle}/>
        <Body videos={videos}
              selectedVideo={selectedVideo}
              onVideoClick={selectVideo}/>
      </div>
    </>
  );
}

export default App;
