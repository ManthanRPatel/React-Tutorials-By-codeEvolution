import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1;
        case 'decremant':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter3() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2 ] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count = {count} </h1>
            <button onClick={()=>dispatch('increment')} >Increament</button>
            <button onClick={()=>dispatch('decremant')} >Decreament</button>
            <button onClick={()=>dispatch('reset')} >Reset</button><br />
            <h1>Count2 = {count2} </h1>
            <button onClick={()=>dispatch2('increment')} >Increament</button>
            <button onClick={()=>dispatch2('decremant')} >Decreament</button>
            <button onClick={()=>dispatch2('reset')} >Reset</button>
        </div>
    )
}

export default Counter3
