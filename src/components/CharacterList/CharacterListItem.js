import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CharacterListItem = ({item, getEpisodes}) => {
    const classes = useStyles();
    const handleClick = () => getEpisodes(item);

    return (
        <Grid onClick={handleClick} container className={classes.root} spacing={3}>
            <Grid item>
                <img src={item.image} width="50" height="50"/>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>{item.name}</Paper>
            </Grid>
             
        </Grid>
    );
}

export {CharacterListItem};
