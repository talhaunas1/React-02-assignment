import React from 'react';
import './About.css'
import { Grid } from '@mui/material';

const About = () => {
    return (
        <div className='aboutus'>
            
            <Grid container className='main'>
                <Grid item md={7} ></Grid>

                <Grid item md={5}  className='child2' container >
                    <div className='bluediv'>
                        <p  className='title'>About Us</p>
                        <p className='para'>
                        For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way. 
                        <br/>
                        <br/>
                        We've matured into an industry leader and trusted resource for those    seeking quality, innovation and reliability when building in the U.S.
                        </p>

                        

                        <div >
                            <div>
                                More on Our History
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
            
            {/* <div className='backimg2'> </div>

            
            <div className='bluediv'>

            <div className='set_text'>
                <h5 >About us </h5>
                <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.   We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
               
            </div>
            <button> <p className='btn1'> More  On Our History</p> </button>

            </div> */}

        </div>
    );
};

export default About;