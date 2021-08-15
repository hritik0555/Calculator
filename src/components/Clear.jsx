import React from "react";
import clear from "./clear.css";

function Clear(props){

return <div className="clr-button" onClick={props.handleClear}>{props.value}</div>

}

export default Clear;