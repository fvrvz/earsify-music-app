import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../contexts/DataProvider";
import { useDebounce } from 'use-debounce';

const Searchbar = () => {
  const [data, setData, query, setQuery] = useContext(DataContext);
  const [search, setSearch] = useState(null);
  const [value] = useDebounce(search, 1500);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) setQuery(search);
  };

  const handleChange = (e) => {
    if (value) setQuery(value);
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar__container" onChange={handleChange}>
      <input
        type="input"
        name="search-bar"
        id="search-bar"
        onChange={handleSearch}
        autoComplete="off"
        placeholder="Search your song"
      />
      <span>Search your song:</span>
      <button type="submit" className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button type="reset" defaultValue="Reset" className="cancel-btn">
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </form>
  );
};

export default Searchbar;
