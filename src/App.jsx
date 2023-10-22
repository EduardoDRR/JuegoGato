import { useState } from 'react'
import './App.css'
import { Game } from './components/Game'
//import { Modal } from './components/Modal'
import { VictoryScreen } from './components/VictoryScreen'

function App() {
  const [player,setPlayer] = useState("X")
  const [table,setTable] = useState([ 
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const win = calculateWinner()
  

  const onClickReplay = () => { 
    setTable(Array(9).fill(null))
  }

  const onClickCell = (index) =>{
    if(table[index]===null){
      const newTable = table.slice()
      newTable[index] = player
      setTable(newTable)
      player ==='X' ? setPlayer('O') :setPlayer('X') 
    }
 }

  function calculateWinner () {
    let counterCell = 0
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for(let i = 0; i < lines.length; i++ ){
      const [a,b,c] = lines[i]
      if( table[a] && table[a] === table[b] && table[a] === table[c] ){
        return table[a]
      }
    }

    for(let i=0; i < table.length; i++){
      if(table[i] === null){
        return null
      } 
      if(counterCell > 7){
        return "Draw"
      } 
      counterCell++
    }
  
 }

  return (
    <main>
      {!!win && <VictoryScreen winPlayer={win} onClickReplay={onClickReplay}/>}
      <h1 className='title'> Juego tres en Raya </h1>
      <h2 className='turno'>Turno: {player}</h2>

      <Game table={table} player={player} onClickCell={onClickCell}/>
    </main>
  )
}

export default App
