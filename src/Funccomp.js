import Modulecss from './styling/custom.module.css';
function Funccomp(){
    return (<>
    <h2 className={Modulecss.test}>This is Functional component</h2>
    <h3 className={Modulecss.test}> This is another text</h3>
    </>
    );
}

export default Funccomp;