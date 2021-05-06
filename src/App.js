import React,{ useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";
import Player from './Player';

const spotify =new SpotifyWebApi();

function App() {
  const [{token},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',//--------TOKEN
        token: _token,
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{ 
      dispatch({
          type: 'SET_USER',//------------USER
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      })

      spotify.getPlaylist("7b6i2zcbAHbJIEEwBLIMpD").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
    }
  },[dispatch]); 
  console.log("tokennnn ",token);
  return (
    <div className="app">
      {
        token?
          <Player spotify={spotify}></Player>
        :
          <Login></Login>
        
      }
    </div>
  );
}

export default App;
