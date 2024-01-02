import React,{memo} from 'react'

export const MyBtn = memo(({onPlus}) => { //единичный рендер компонента 
    console.log('render!')
    return (
        <button onClick={onPlus}>+</button>
    )
})
