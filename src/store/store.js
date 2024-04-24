import { configureStore } from '@reduxjs/toolkit'
import expenditureReducer from '../redux/expSlice' //import reducer from expSlice

//store
export const store = configureStore({
    reducer: {
        //reducers name
        myExpenditure: expenditureReducer
    }
}) 