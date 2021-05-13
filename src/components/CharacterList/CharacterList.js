import React, { useState, useEffect } from 'react';
import {CharacterListItem} from './CharacterListItem';
import {EpisodeList} from '../EpisodeList/EpisodeList';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  text: {
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightBold,
    },
   characterList: {
       height: '300px',
       overflow: 'auto'
   }
}));

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([]);
    const [episodeList, setEpisodeList] = useState([]);
    const [search, setSearch] = useState("");
    
    const classes = useStyles();

    useEffect(() => {
            const url = 'https://rickandmortyapi.com/api/character';
                            
            fetch(url)
                .then(result => result.json())
                .then(data => {
                    setCharacterList(data.results);
                })
                .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        const results = characterList.filter(
          (item) =>
            item.name.toLowerCase().includes(search)
        );
        results.length && setEpisodeList(results[0].episode);
    }, [search]);

    const searchCharacter = (event) => {
        setSearch(event.target.value);
    };
    const getEpisodes = (item) => {
        setEpisodeList(item.episode);
    };
    return (
        <div className={classes.root}>
        <Grid container>
            <Grid item >
              <Typography className={classes.text}>Choose Character from list or search in the search field</Typography>
            </Grid>
        </Grid>
        <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={searchCharacter}
          />

        <div className={classes.characterList}>{characterList.length > 0 
            ? characterList.map((item) => <CharacterListItem getEpisodes={getEpisodes} key={item.id} item={item} />)
            : <p>Nothing found</p>
        }</div>
        {episodeList.length > 0  
            && episodeList.map((item, index) => <EpisodeList key={index} item={item} />)
        }
        </div>
    );
}

export {CharacterList};
