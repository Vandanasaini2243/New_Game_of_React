import React, { useState } from 'react'

const Box = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div className='box'>
        <h1>Counter App</h1>
        <h2>{counter}</h2>

        <div className='button-group'>
            <button className='btn decrease' onClick={()=>setCounter(counter-1)}>-</button>
            <button className='btn increase'onClick={()=>setCounter(counter+1)}>+</button>
        </div>
        <button className='reset-btn' onClick={()=>setCounter(0)}>Reset</button>
        
    </div>
  )
}

export default Box
