import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" alt="" src="https://cdn.shopify.com/s/files/1/0011/4651/9637/products/DigitalDownload_1000x_86023b11-8f26-4041-bb62-f18c5a55069d_900x.png?v=1613043167"></img>
            <div className="footer__songInfo">
                <h4>You Belong With Me</h4>
                <p>Taylor Swift</p>
            </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon></PlaylistPlayIcon>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon></VolumeDownIcon>
                    </Grid>
                    <Grid item xs>
                        <Slider></Slider>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
