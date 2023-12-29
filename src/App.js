import './App.css'
import React, { useState, useRef } from 'react'

function App() {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')

	const refName = useRef(null)
	const refSurname = useRef(null)
	const refButton = useRef(null)

	const handleInputName = (e) => {
		if (e.key === 'Enter') {
			if (!surname) {
				refSurname.current.focus()
			} else {
				refButton.current.focus()
			}
		}
	}
	const handleInputSurname = (e) => {
		if (e.key === 'Enter') {
			if (!name) {
				refName.current.focus()
			} else {
				refButton.current.focus()
			}
		}
	}
	return (
		<div className='centr-centr'>
			<input
				type='text'
				placeholder='Имя'
				value={name}
				onChange={(e) => setName(e.target.value)}
				ref={refName}
				onKeyUp={handleInputName}
			/>
			<br />
			<input
				type='text'
				placeholder='Фамилия'
				value={surname}
				onChange={(e) => setSurname(e.target.value)}
				ref={refSurname}
				onKeyUp={handleInputSurname}
			/>
			<br />
			<button ref={refButton}>Перейти</button>
		</div>
	)
}

export default App
