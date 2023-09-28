import React from 'react'
import "./SideBar.scss";
const SideBar = () => {
    const board_icon = process.env.PUBLIC_URL + "/icons/new_board.png";
    const newdata = {
      "boardname":"Name Please",
      "description":"From Front end"
    }
    const createNewBoard=()=>{
      fetch("http://localhost:8082/create-board", {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newdata)
      }).then(() => {
      });
    }
    
  return (
    <div className='sidebar'>
        <div>
            ALL BOARDS(8)
        </div>
        <div className='new-board-button' >
            <img src={board_icon} alt='board'/>
            <input type='submit'  className='create-new-board' value={"Create New Board"} onClick={createNewBoard}/>
        </div>
    </div>
  )
}

export default SideBar
