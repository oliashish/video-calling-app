import React, { useEffect } from "react";
import OptionsControllers from "./components/OptionsControllers";

import VideoPlayer from "./components/VideoPlayer";

import "./styles/App.css";

function App() {
   useEffect(() => {
      navigator.mediaDevices.getUserMedia({
         video: true,
         audio: true,
      });
   });
   return (
      <div className="App">
         <h1>Video Call</h1>
         <VideoPlayer />
         <OptionsControllers />
      </div>
   );
}

export default App;
