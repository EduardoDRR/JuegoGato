import  ReactDOM  from 'react-dom'
import { VictoryScreen } from './VictoryScreen'

const Modal = ( { playerWin }) =>{
    return ReactDOM.createPortal(
        <VictoryScreen winPlayer={playerWin}/>,
        document.getElementById('modal')
    )
}

export {Modal}