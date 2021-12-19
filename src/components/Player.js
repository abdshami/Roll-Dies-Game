
import React from "react";
import "./Player.css"


const Player = ({number, currentScore ,globalScore})=>{

    return(
        <div className="player">
            <div>
                <h2>PLAYER {number}</h2>
                <h1>{globalScore}</h1>
            </div>
            <div className="current">
                <p>Current</p>
                <p>{currentScore}</p>
            </div>

        </div>
    )

}


export default Player;