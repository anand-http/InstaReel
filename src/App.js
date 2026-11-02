import React, { useEffect,useState } from 'react';
import Video from './Component/Video';
import './App.css';
import db from './Firebase';

const App = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    db.collection("Reels").onSnapshot((snapshot) =>
      setVideo(snapshot.docs.map((doc) => doc.data())));
  }, [])




  
  return (
    <div className='app'>
      <div className="app_video">
        {

          video.map(({ url, recordImg, username, description, tickersong }) => {
            return (
              <Video
                url={url}
                recordImg={recordImg}
                username={username}
                description={description}
                tickersong={tickersong}
              />
            )
          })


        }


      </div>
    </div>
  )
}

export default App;