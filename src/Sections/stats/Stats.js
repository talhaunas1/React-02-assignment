import React from 'react';
import './Stats.css'
import { Grid } from "@mui/material";
const Stats = () => {
    return (
        <div className='stat'>
            
            <Grid container>
                {/* <Grid item md={1}></Grid> */}
                <Grid item md={6}>
                <img className='imgg' src="./images/merge.png" />

                </Grid>
                <Grid item md={6}>
                    
                <h6 className=''>30 Years Experience</h6>
                <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Stats;