import React, {useState} from "react";
import Die from "./Die.js";
import Player from "./Player.js";
import "./RollDice.css";


const RollDice = ({sides})=>{

    const [state,setState] = useState ({
         die1: "one",
         die2: "four",
         playerTurn: 1,
         rolling: false,
         totalScore : 0,
         winner: 0,
         players:{
             player1:{
                 currentScore: 0,
                 globalScore: 0
             },
             player2:{
                currentScore: 0,
                globalScore: 0
            }
        }
         


    });

    const {die1,die2,rolling, totalScore,playerTurn,players} = state;


    const roll = ()=>{
        const newDie1 = sides[Math.floor(Math.random()*sides.length)];
        const newDie2 = sides[Math.floor(Math.random()*sides.length)];
        const score1 = Object.values(newDie1);
        const score2 = Object.values(newDie2);
        setState({
            die1: Object.keys(newDie1),
            die2: Object.keys(newDie2),
            rolling: true,
            totalScore: score1[0] + score2[0]
        })

        setTimeout(()=>{
            setState( prevState => ({...prevState,rolling: false}))
        }, 1000)

    };

    const hold = (playerTurn88)=>{
     // console.log(playerTurn88);
        if (playerTurn88 === 1){
             setState({
                 playerTurn: 2
              });
        }else{
            // setState({
            //     playerTurn: 1
            //   })
        }
        
        

    }

    return(
        <div className="game-board">
               <Player number={1} currentScore={1} globalScore={1}/>
                <div className="roll-dice">
                    <div className="container">
                        <Die face={String(die1)} rolling={rolling} />
                        <Die face={String(die2)} rolling={rolling}/>
                    </div>
                    <div className="buttons">
                        <button onClick={roll} disabled={rolling}>
                            {rolling ? "Rolling..." : "Roll Dice"}
                        </button>

                        <button onClick={hold(playerTurn)} >
                            Hold
                        </button>
                    </div>
                   
                    
                </div>
                <Player number={2}  currentScore={2} globalScore={2}/>
       </div>
    )
};

RollDice.defaultProps ={
   sides: [
        {one :1},
        {two :2},
        {three :3},
        {four :4},
        {five :5},
        {six :6},

   ]
}

export default RollDice;
