import React from "react";
import "../styles/App.css";

const VideoPlayer = ({ stream, myRef, callAccepted, callEnded, userRef }) => {
    return (
        <div className="video-container">
            <div className="video">
                {stream && (
                    <video
                        playsInline
                        muted
                        ref={myRef}
                        autoPlay
                        style={{ width: "400px" }}
                    />
                )}
            </div>
            <div className="video">
                {callAccepted && !callEnded ? (
                    <video
                        playsInline
                        ref={userRef}
                        autoPlay
                        style={{ width: "400px" }}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default VideoPlayer;
