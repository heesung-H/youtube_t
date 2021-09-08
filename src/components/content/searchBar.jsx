import React, { useRef } from 'react';
import './searchBar.css';

const SearchBar = ({onSearch}) => {
    const inputRef = useRef();

    const searchHandle = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        searchHandle();
    }

    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchHandle();
        }
    }

    const onSubmit = event => {
        event.preventDefault();
    }

    return (
        <>
            <form className="seachArea" onSubmit={onSubmit}>
                <i className="search-icon fab fa-youtube"></i>
                <input className="youtube-search-text" ref={inputRef} placeholder="Search.." onKeyPress={onKeyPress} type="text"/>
                <button className="youtube-search-btn" onClick={onClick}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </>
    );
};

export default SearchBar;