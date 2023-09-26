import React from 'react'
import "./SideBar.scss";
const SideBar = () => {
    const board_icon = process.env.PUBLIC_URL + "/icons/new_board.png";
  return (
    <div className='sidebar'>
        <div>
            ALL BOARDS(8)
        </div>
        <div className='new-board-button' >
            <img src={board_icon} alt='board'/>
            <input type='submit'  className='create-new-board' value={"Create New Board"}/>
        </div>
    </div>
  )
}

export default SideBar
