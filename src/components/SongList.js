import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div>
                    {song.title}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);