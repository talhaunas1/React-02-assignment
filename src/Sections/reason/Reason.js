import React from "react";
import "./Reason.css";
import { Grid } from "@mui/material";
import Card1 from "../../components/card1/Card1";

const Reason = () => {
    return (
        <div className="reason">
            
                <p className="text">Our Reputation</p>
            

            <div className="card_1">
                <Grid container className="grid1">
                    <Grid item md={1}></Grid>
                    <Grid item md={3} className="move">
                        <Card1 />
                    </Grid>


                    <Grid item md={1}></Grid>
                    <Grid item md={3}>
                        <Card1 />
                    </Grid>

                    <Grid item md={1}></Grid>
                    <Grid item md={3}>
                        <Card1 />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Reason;
