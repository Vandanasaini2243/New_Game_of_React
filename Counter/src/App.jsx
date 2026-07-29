// import React, { useState } from 'react'

// const App = () => {
//   const[counter,setCounter]= useState(0);

// const handleIncrement =()=>{
//   setCounter((prev) => prev + 1);
// }

// const handleDecrement =()=>{
//   setCounter((prev)=> prev -1);
// }

// const handleReset =()=>{
  
//   setCounter(0);
// }


//   return (
//     <div style={{backgroundColor:"yellow",width:"100vh",height:"100vh",padding:50}}>

//       <div style={{padding:50,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"pink",borderRadius:10}}>

//         <button onClick={handleDecrement}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrement}>+</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <h2 className="counter">{counter}</h2>

        <div className="button-group">
          <button className="btn decrease" onClick={handleDecrement}>
            -
          </button>

          <button className="btn increase" onClick={handleIncrement}>
            +
          </button>
        </div>

        <button className="reset-btn" onClick={handleReset}>
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default App;