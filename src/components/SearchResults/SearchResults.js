import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults (props) {

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={props.searchResults} />
      </div>
    )
  }


export default SearchResults;
