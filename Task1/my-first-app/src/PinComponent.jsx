import React from 'react';

export default class PinComponent extends React.Component{
  constructor(props){
    super(props)
    this.values=new Array(this.props.length).fill('')
this.elem =[]
  }
  handleChange=(e,index)=>{
  
   this.values[index] = e.target.value
   if(this.values[index].length === 4 && index+1 < this.values.length){
       this.elem[index+1].focus()
       
   }
   this.props.onChange(this.values.join(''))
  }
  handleRemove=(e,index)=>{
console.log(e.keyCode)
if(e.keyCode === 8 && !e.target.value && index-1 >= 0){
this.elem[index-1].focus()
}
  }
  render(){
  
    return(
      <div style={{display:"flex"}}>
{
  this.values.map((item,index)=>(
<input style={{width:"30px",height:"30px",margin:"5px",padding:"2px"}} 
onChange={(e)=>this.handleChange(e,index)}
key={index}
maxLength={4}
ref={(elem)=>this.elem[index] = elem}
onKeyDown={(e)=>this.handleRemove(e,index)}
/>
  ))
}
      </div>
    )
  }
}