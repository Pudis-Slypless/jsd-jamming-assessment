import React from "react";
import "./App.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App(props) {
  const [searchResults, setSearchResults] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ]);

  const [playListName, setPlayListName] = useState("My playlist");

  const [playListTracks, setPlayListTracks] = useState([
    {
      name: "playlistName1",
      artist: "playlistArtist1",
      album: "playlistAlbum1",
      id: 4,
    },
    {
      name: "playlistName2",
      artist: "playlistArtist2",
      album: "playlistAlbum2",
      id: 5,
    },
    {
      name: "playlistName3",
      artist: "playlistArtist3",
      album: "playlistAlbum3",
      id: 6,
    },
  ]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist
            playListName={playListName}
            playListTracks={playListTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
