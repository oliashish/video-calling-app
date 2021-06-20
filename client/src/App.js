import React, { useEffect } from "react";

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
        </div>
    );
}

export default App;
