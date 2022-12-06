import React from 'react'
import axios from 'axios'
class SendingData extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  
        })
    }
    handleClick=()=>{
        axios.post("http://localhost:2005/register",
        {email:this.state.username,
        passcode:this.state.password})
        console.log(this.state.username,this.state.password)
        this.setState({
            username:"",
            password:""
              
            
        })
    }            
    render(){
        return(
            <div>
               <p> <input placeholder="Enter username" value={this.state.username} onChange={this.handleChange} name="username" /></p>
               <p> <input placeholder="Enter password"  value={this.state.password} onChange={this.handleChange} name="password" /></p>
               <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }

}
export default SendingData