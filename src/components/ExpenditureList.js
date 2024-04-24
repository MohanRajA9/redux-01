import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExp } from '../redux/expSlice'

function ExpenditureList() {
    //----------------------useSelector((state) => state.reducerName.expSliceName) <-- syntax for useSelector to select states
    const expenditureData = useSelector((state) => state.myExpenditure.expenditure)

    console.log("expenditureData", expenditureData)

    const dispatch = useDispatch()

    const deleteExpenditure = (id) => {
        // console.log(id)
        //dispatch(deleteExp())
        dispatch(deleteExp(id))
    }

    return (
        <div>ExpenditureList
            {expenditureData.map((item) => (
                <li key={item.id} >{item.category}
                    <button onClick={() => deleteExpenditure(item.id)} >Delete</button>
                </li>
            ))}
        </div>
    )
}

export default ExpenditureList