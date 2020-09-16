import React, { useState } from 'react';

const Count = () => {
    var [count, setCount] = React.useState(0)

    // Can set state using a separate method here or in the JSX 
    const minusOne = () => {
        setCount(count-1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={minusOne} id="minus-button">-</button> 
            <button onClick={() => setCount(count+1)} id="plus-button">+</button>
        </>
    )
}

export default Count