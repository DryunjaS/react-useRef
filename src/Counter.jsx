import React, { useState,memo } from 'react'

export const Counter = memo(({id,value}) => { // сделал счетчики не зависимыми, при нажатии рендерится только один. Здесь memo зависит от id,value
    console.log(id,'- Счетчик')
    return (
        <div>
            <h3>Счетчик {id}</h3>
            <br />
            <div className='counter-val'>{value}</div> 
        </div>
    )
})
