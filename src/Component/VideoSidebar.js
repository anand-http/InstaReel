import React, { useState } from 'react';
import '../ComponentStyle/VideoSidebar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const VideoSidebar = ({recordImg}) => {
    const [liked, setLiked] = useState(false);
    const [save, setSave] = useState(false);

    return (
        <div className="videoSidebar">

            <div className="videoSidebar_icon">
                {
                    liked ? (<FavoriteIcon style={{ color: "red" }} fontSize='large' onClick={() => setLiked(false)} />) : (<FavoriteBorderIcon fontSize='large' onClick={() => setLiked(true)} />)

                }
                <p>{liked ? 300 + 1 : 300}</p>

            </div>
            <div className="videoSidebar_icon">
                < CommentIcon fontSize='large' />
                <p>500</p>
            </div>
            <div className="videoSidebar_icon">
                <ShareIcon fontSize='large' />
                <p>100</p>
            </div>


            <div className="videoSidebar_icon">
                {
                    save ? (<TurnedInIcon fontSize='large' onClick={() => setSave(false)} />) : (<TurnedInNotIcon fontSize='large' onClick={() => setSave(true)} />)
                }
                <p>{save ? 200 + 1 : 200}</p>
            </div>

            <div className="videoSidebar_icon-song">
                <img src={recordImg} alt="png" />

            </div>

        </div>
    )
}

export default VideoSidebar;