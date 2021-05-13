import React, { useState, useEffect } from 'react';
import {EpisodeListItem} from './EpisodeListItem';


const EpisodeList = ({item}) => {
    return (
      <>
        <EpisodeListItem item={item} />
      </>
    );
}
export {EpisodeList};
