import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

export const SearchBar = ({ onSearch, isMobile }) => {
   const [query, setQuery] = useState();

    const inputChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    const setSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    }


    if (isMobile) {
        return (
            <div className="mobileSearch">
                <input className="mobileSearchInput" placeholder="Search..."
                type="text" onChange={inputChangeHandler} />
                <button className="mobileSearchSubmit" name="Search" onClick={setSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        )
    }
    return (
        <div className="SearchBar">
            <form onSubmit={setSearch}>
            <input placeholder="Search..." type="text" onChange={inputChangeHandler}/>
            <button className="SearchButton" name="Search">SEARCH</button>
            </form>
        </div>
    )
};