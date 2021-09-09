import React, { useState, useEffect} from 'react';
import ContentItem from './contentItem';
import styles from './contentList.module.css';

const ContentList = (props) => {

    const moreData = () => {
        props.onMoreData("123");
    }

    return (
        <>
            <ul className={styles.videos}>
                {props.videos.map(video => (
                    <ContentItem key={video.id} video={video}/>
                ))}
            </ul>
            <button className={styles.moreBtn} onClick={moreData}>더보기</button>
        </>
    );
            
};

export default ContentList;