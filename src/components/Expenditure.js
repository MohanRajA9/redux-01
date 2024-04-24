import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import { addExp } from '../redux/expSlice'

function Expenditure() {

    const inputRef = useRef(null)  
    const dispatch = useDispatch()
    
    const addNewExp = () => {
        // console.log(inputRef.current.value)
        //dispatch(addExp())
        dispatch(addExp(inputRef.current.value))
    }
    return(
        <div>
            <h1>Expenditure</h1>
            <input type='text' ref={inputRef} />
            <button onClick={addNewExp} >Add Expenditure</button>
        </div>
    )
}

export default Expenditure

