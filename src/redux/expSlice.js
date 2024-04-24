import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //states
    expenditure: []
}

const expSlice = createSlice({ 
    name: "expenditure", //name of the reducer, this Name can be anything by our wish.
    initialState,
    reducers: {
        addExp: (state, action) => {  //action
            // console.log("state", state.expenditure, "action", action.payload)
            let newExp = state.expenditure.push({ id: Date.now(), category: action.payload })
            // console.log("newExp", newExp)
            // console.log("state", state, "action", action)
        },
        deleteExp: (state, action) => { // action
            state.expenditure = state.expenditure.filter((expend)=>{
                // console.log("expend.id",expend.id)
                return expend.id !== action.payload
            })
            // console.log("action.payload",action.payload)
        }
    }
})

export const { addExp, deleteExp } = expSlice.actions

export default expSlice.reducer

