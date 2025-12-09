import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slice/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  // console.log(count);

  return (
    <div style={{marginTop: '10px'}}>
      <div>
        <button
          style={{marginLeft: '20px'}}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{marginLeft: '20px'}}>{count}</span>
        <button
          style={{marginLeft: '20px'}}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button style={{marginLeft: '20px'}} onClick={() => dispatch(incrementByAmount(200))}>ADD</button>
      </div>
    </div>
  )
}

export default App