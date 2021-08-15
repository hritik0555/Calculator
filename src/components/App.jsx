import { useState } from "react";
import app from "./app.css";
import Button from "./Button"

import Input from "./Input";
import Clear from "./Clear";
import * as math from "mathjs";




function App() {

const [isinput,setIsinput]=useState("");


function handleClear(){

setIsinput("");

}


function handleClick(val){

 
    setIsinput((prev)=>{
      return prev+val;
     })
 

 

}


function handleEqual(val)
{
 

  setIsinput((prev)=>{
  
      return math.evaluate(prev);

    
    
  })
}



 return <div className="app">

 <div className="calc-box">

<Input isinput={isinput} />
 
   
   <div className="row">
   <Button handleClick={handleClick} child={7}></Button>
   <Button handleClick={handleClick} child={8}></Button>
   <Button handleClick={handleClick} child={9}></Button>
   <Button handleClick={handleClick} child={'/'}></Button>
   
   </div>
   <div className="row">
   <Button handleClick={handleClick} child={5}></Button>
   <Button handleClick={handleClick} child={4}></Button>
   <Button handleClick={handleClick} child={6}></Button>
   <Button handleClick={handleClick} child={'*'}></Button>
   </div>
   <div className="row">
   <Button handleClick={handleClick}  child={1}></Button>
   <Button handleClick={handleClick} child={2}></Button>
   <Button handleClick={handleClick} child={3}></Button>
   <Button handleClick={handleClick} child={'-'}></Button>
   </div>
   <div className="row">
   <Button handleClick={handleClick} child={'.'}></Button>
   <Button handleClick={handleClick} child={0}></Button>
   <Button handleClick={handleEqual} child={'='}></Button>
   <Button handleClick={handleClick} child={'+'}></Button>
   
  
   </div>

   <div className="row">
   <Clear handleClear={handleClear} value="Clear"/>
   
   </div>
   </div>
 </div>


} 



export default App;
