import React, { Component } from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './home.css'
import DoneIcon from '@material-ui/icons/Done';
import MyMapComponent from './map.js';

class Home extends Component {
    render() {
        return (
            <Grid className='homeGrid'>
                <Typography>
                    <h1>Welcome to Unify.</h1>
                    <h2>Where coders connect <DoneIcon /></h2>
                </Typography>
                <hr/><br />
                <MyMapComponent />
            </Grid>

        );
    }
}

export default Home;