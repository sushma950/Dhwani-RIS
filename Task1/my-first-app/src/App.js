import React from "react"
import './App.css';

import Pin from './PinComponent'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }
handleChange=(value)=>{
this.setState({
value:value
})
//console.log(this.state.value)
}
  render(){
    return(
      <>
      <div >
Credit Card Input:
<Pin length={4} onChange={this.handleChange}
/>
<div display="flex">
<h1>{this.state.value}</h1>

</div>
</div>
      </>
    )
  }
}

