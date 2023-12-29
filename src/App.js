import './App.css'
import React, { useState, memo } from 'react'
import { Counter } from './Counter'
import { IsFive } from './IsFive'

function App() {
	const [value1, setValue1] = useState(0)
	const [value2, setValue2] = useState(0)

	return (
		<div className='App'>
			<div className='wrap-counter'>
				<button onClick={() => setValue1(value1 + 1)}>+</button>
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
