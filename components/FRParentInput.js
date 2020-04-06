import React, { Component } from 'react'
import FRInput from './FRInput'


{/* <FRParentInput /> */}

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    clickHandler = ()=>{
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <FRInput ref ={this.inputRef} /><br />
                <button onClick={this.clickHandler} className="btn btn-primary" >Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
