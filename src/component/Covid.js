import React, { useEffect,useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//create our styles
const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue",
      fontFamily: "Roboto"
    }
  };

const Covid=()=>{
const getCovidData=async()=>{
    try{
        const response= await fetch('https://api.covidtracking.com/v1/states/current.json');
       const actualdata=await response.json();
        console.log(actualdata[15]);
    }
    catch(err)
    {
        console.log(err);
    }
   
}

useEffect(()=>{
   // getCovidData();
},[]);   

 return(
        <>       
            <h1>Covid-19 live tracker  </h1>

            <div style={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
        </>
    )
}
export default Covid; 