

//actionType
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

//action-creator
export const increment =(payload)=>({
    type: INCREMENT,
    payload
})
export const decrement =(payload)=>({
    type: DECREMENT,
    payload
})
export const reset =()=>({
    type: RESET,
    
})