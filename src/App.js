import './App.css'
import React, { useState, memo } from 'react'

const Table = memo(({ data }) => {
	return (
		<table>
			{data.map((item, id) => {
				return (
					<tr>
						<td>{id}</td>
						<td>{item}</td>
					</tr>
				)
			})}
		</table>
	)
})
function App() {
	const [data, setData] = useState([10, 20, 30, 40])

	return (
		<div className='App'>
			<Table data={data} />
			<button onClick={() => setData([...data, data[data.length - 1] + 10])}>
				Добавить элемент
			</button>
		</div>
	)
}

export default App
