const songsReducer = () => {
    return [
        { title: 'no scrubs', duration: '4:00' },
        { title: 'no scrubs', duration: '4:00' },
        { title: 'no scrubs', duration: '4:00' },
        { title: 'no scrubs', duration: '4:00' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}