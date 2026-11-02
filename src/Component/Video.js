import React, { useEffect, useRef, useState } from 'react';
import '../ComponentStyle/Video.css';
import VideoSidebar from './VideoSidebar';
import VideoFooter from './VideoFooter';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


const Video = ({ url, recordImg, username, description, tickersong }) => {
    const [play, setPlay] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const videoPlay = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);

        }
        else {
            videoRef.current.play();
            setPlay(true);
        }

    }

    useEffect(() => {
        if (isMuted) {
            videoRef.current.muted = true;
        }
        else {
            videoRef.current.muted = false;
        }
    }, [isMuted])



    const manageVolume = () => {
        setIsMuted(!isMuted);
    }

  
    return (
        <div className='video'>
            <div className="sound" onClick={manageVolume}>
                {
                    isMuted ? (
                        <VolumeOffIcon className='volume_off' />

                    ) : (
                        < VolumeUpIcon className='volume_on' />
                    )
                }
            </div>
            <video autoPlay loop muted ref={videoRef} onClick={videoPlay} src={url}></video>
            <VideoSidebar recordImg={recordImg} />
            <VideoFooter username={username} description={description} tickersong={tickersong} />
        </div>

    )
}

export default Video;