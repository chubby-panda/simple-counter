import React, { useState } from 'react';

const Count = () => {
    var [count, setCount] = React.useState(0)

    // Can set state using a separate method here or in the JSX 
    const minusOne = () => {
        setCount(count-1)
    }

    return (
        <div className="count-container">
            <h2>A Simple Counter</h2>
            <div className="button-container">
                <button onClick={minusOne} className="btn">-</button> 
                <button onClick={() => setCount(count+1)} className="btn">+</button>
            </div>
            <h1>{count}</h1>
        </div>
    )
}

export default Count