import './App.css'
import React, { useState, memo, useCallback } from 'react'
import { Counter } from './Counter'
import { IsFive } from './IsFive'
import { MyBtn } from './MyBtn'

function App() {
	const [value1, setValue1] = useState(0)
	const [value2, setValue2] = useState(0)
	//использование безымянной функции в onClick, что приводит в постоянному рендерингу компонента
	//использование useCallback, не приводит к постоянному рендерингу компонента
	const onPlus = useCallback(() => {
		setValue1((value) => value + 1)
	}, [])

	return (
		<div className='App'>
			<div className='wrap-counter'>
				<MyBtn onPlus={onPlus} />
				<Counter id={1} value={value1} />
			</div>

			<div className='wrap-counter'>
				<button onClick={() => setValue2(value2 + 1)}>+</button>
				<Counter id={2} value={value2} />
			</div>
			<IsFive value={value2} />
		</div>
	)
}

export default App
