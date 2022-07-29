import React, { useMemo, useState } from 'react'

const App = () => {

const [increment, setIncrement] = useState(0);
const [decrement, setDecrement] = useState(100000);

const isEven = useMemo( () => {
  console.log("event fired")

  let i =0;
  while(i < 200000000) i++;
  return increment % 2 === 0
}, [increment])


// const isEven = () => {
//   console.log("event fired")

//   let i =0;
//   while(i < 200000000) i++;
//   return increment % 2 === 0
// }

  return (
    <div>
      <h1>{increment}</h1>
      <h2>{isEven?"Even":"Odd"}</h2>
      <button onClick={() => setIncrement(increment+ 1)}>increment</button>
       
      <h1>{decrement}</h1>
      <button onClick={() => setDecrement(decrement - 1)}>decrement</button>
    </div>
  )
}

export default App
