import { Component } from "react";
import Modulecss from './styling/custom.module.css';

class Classcomp extends Component {
    render(){
        return (<h2 className={Modulecss.test}> This is class based component!</h2>);
    }
}

export default Classcomp;