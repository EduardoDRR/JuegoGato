import '../Styles/VictoryScreen.css'

const VictoryScreen = ({ winPlayer, onClickReplay}) =>{  //eslint-disable-line
    return(
       <article>
            <div  className="VictoryScreen">
                <div className="VictoryScreen-box">
                    <h2 className="VictoryScreen-title">Winner: </h2>
                    <p className="VictoryScreen-player"> {winPlayer} </p>
                    <button className="VictoryScreen-replay" onClick={onClickReplay}>Replay</button>
                </div>
            </div>
       </article>
    )
}

export {VictoryScreen}