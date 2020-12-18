import React from "react"


export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    
    render(){
        const {inputData,handleDelete} = this.props
        return(
            <>
            {inputData && inputData.map(item=>
                <div style={{marginLeft:"500px",display:"flex"}} key={item.id}>
                    <h2 style={{margin:"0"}}>{item.value}</h2>
                    <button style={{padding:"5px"}} onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
                )}
            </>
        )
    }
}