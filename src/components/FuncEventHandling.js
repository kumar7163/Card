import { useState } from "react";

function FuncEventHandling(){

let [count, setCount] = useState(0);
 function handleClick(){
    setCount(++count);
 }
 
 
 
 return (
        <>
    <button onClick = {handleClick}> Click me</button>
    <span>{count}</span>
    </>
 );   
}

export default FuncEventHandling;