import react from "react";
import "./Die.css";



const Die = ({face})=>{
    return <i className = {`die fas fa-dice-${face}` } />
    
};

export default Die;