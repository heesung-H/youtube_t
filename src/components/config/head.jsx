import React from 'react';
import SearchBar from '../content/searchBar';

const Head = ({onSearch}) => {

     return (
        <SearchBar onSearch={onSearch}/>
    );
}

export default Head;