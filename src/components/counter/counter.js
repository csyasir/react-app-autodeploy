import React, { useState } from 'react'

function Counter({ value}) {
    let [count, setCount] = useState(value);
    return (
        <>
            <p>Counter =  { count }</p>
            <button onClick = {() => setCount(++count)}>+</button>
            <button onClick = {() => setCount(value)}>Reset</button>
            <button onClick = {() => setCount(--count)}>-</button>
        </>
    )
}

export default Counter
