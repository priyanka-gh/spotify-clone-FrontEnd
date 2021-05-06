import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from "./Header";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SongRow from './SongRow';

function Body({spotify}) {
    const[{discover_weekly}]=useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}></Header>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=""></img>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
                    <FavoriteIcon fontSize="large"></FavoriteIcon>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className="playlist__song">
                    {discover_weekly?.tracks.items.map((item)=>(
                        <SongRow track={item.track}></SongRow>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Body;