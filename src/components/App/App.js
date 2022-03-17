import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../utils/Spotify";

function App(props) {
  const [searchResults, setSearchResults] = useState([]);

  const [playListName, setPlayListName] = useState("My playlist");

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);
  const [playListTracks, setPlayListTracks] = useState([]);

  function addTrack(track) {
    let tracks = [...playListTracks];
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    setPlayListTracks(tracks);
  }

  function removeTrack(track) {
    let tracks = playListTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    setPlayListTracks(tracks);
  }

  function updatePlaylistName(name) {
    setPlayListName(name);
  }

  function savePlaylist() {
    const trackUris = playListTracks.map((track) => track.uri);
    Spotify.savePlaylist(playListName, trackUris).then(() => {
      setPlayListName("New Playlist");
      setPlayListTracks([]);
    });
  }

  function search(term) {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playListName={playListName}
            playListTracks={playListTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
