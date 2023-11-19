import { Component } from "react";

class Classeventhandling extends Component{

    handleClick = (name)=>{
        alert(`Button clicked ${name}`);
    }
    render(){
        const name = "Ram"
        return(<button onClick={()=>this.handleClick(name)}>Click me</button>);
    }
}

export default Classeventhandling;