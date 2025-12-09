import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    // ✔️ counter = name of the Redux slice
    // ✔️ Used to prefix action types
    // ✔️ Used as a key in the Redux store state
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer