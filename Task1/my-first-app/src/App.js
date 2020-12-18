import React from "react"
import './App.css';
import Card from './Card'
import Pin from './PinComponent'
import {v4 as uuid} from "uuid"
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      inputData:[]
    }
  }
handleChange=(value)=>{
this.setState({
value:value
})
//console.log(this.state.value)
}
handleSubmit=(event)=>{
  event.preventDefault()
  const {value,inputData} = this.state
  let currentValue = {
    id:uuid(),
    value:value
  }
  this.setState({
    inputData:[...inputData,currentValue]
  })
}
 
handleDelete=(id)=>{
  const {inputData} = this.state
  let obj = inputData.filter(item=>item.id!==id)
  
  this.setState({
    inputData:obj
  })
}

  render(){
    const {inputData} = this.state
    return(
      <>
     <div >
       <h1 style={{marginLeft:"500px"}}>Credit Card Input</h1>
 <form onSubmit={this.handleSubmit} style={{marginLeft:"500px"}}>
 <Pin length={4} onChange={this.handleChange}
/>
      <input type="submit" value="submit" />
      </form>    
      <div>
        <Card inputData={inputData} handleDelete={this.handleDelete}/>
        
        </div> 
        </div>
      </>
    )
  }
}

