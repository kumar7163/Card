import { Component } from "react";
import style from '../styling/apirendering.module.css'

class ApiRendering extends Component{

   state = 
   {
    userData: []
   }
    componentDidMount(){
    this.getData()
   }

   getData = async ()=>{
     const response = await fetch("https://dummyapi.io/data/v1/user?page=1&limit=10", {
        method: 'GET',
        headers: { 'app-id': '6558a55f7d98211a1b27644a'}
    });
    const apiData = await response.json();
    this.setState({userData: apiData.data }) ;
    console.log(apiData.data) 
   }
    render(){
        return (
            <>
            <div className="container">
                <div className="row">
                    {this.state.userData.map( data => (
                        <div className="col-lg-6 mt-4"> 
                            <div className={style.container}>

                            <div className={style.item1}>
                                <img src={data.picture}/>
                            </div>
                            
                            <div className={style.item2}>{data.id}</div>
                            <div className={style.item3}>{data.title} {data.firstName } {data.lastName}</div>
                            </div>
                            </div>
                    
                    ))}
                
                                       
                
                </div>
            </div>
            </>
        );
    }
}

export default ApiRendering;