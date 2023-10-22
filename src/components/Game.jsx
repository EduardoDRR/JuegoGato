
import Styles from '../Styles/game.module.css'

const Cell = ({ indexTable, onClickCell, table }) =>{  {/* eslint-disable-line */}
    return (
        <div className={Styles.cell} onClick={() => onClickCell(indexTable)}> {/* eslint-disable-line */}
            {table[indexTable]} {/* eslint-disable-line */}
        </div>
    )
}

const Game = ({onClickCell, table}) =>{ {/* eslint-disable-line */}

    return(
        <section className={Styles.Game}>
           <Cell onClickCell={onClickCell}  table={table} indexTable={[0]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[1]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[2]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[3]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[4]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[5]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[6]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[7]}/>     
           <Cell onClickCell={onClickCell}  table={table} indexTable={[8]}/>     
        </section>
    )
}
export { Game }