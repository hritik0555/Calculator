import React from "react"
import button from "./button.css"

function Button(props){


function IsOperator(val){

    if(isNaN(val))
    {
        return false;
    }
    else
    {
        return true;
    }

}    



return <div className={`numberButton ${IsOperator(props.child)? null : "operatorButton"} `} 
onClick={()=>{
    props.handleClick(props.child)
}
    }>{props.child}</div>    



}


export default Button;