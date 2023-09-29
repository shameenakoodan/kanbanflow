import React from 'react'
import "./SideBar.scss";
import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
const SideBar = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State for controlling the popup
    const board_icon = process.env.PUBLIC_URL + "/icons/new_board.png";
    
    const createNewBoard=()=>{
      setPopupOpen(true);
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
        {isPopupOpen && (
                <PopUp
                    isPopupOpen={isPopupOpen}
                    closePopup={() => setPopupOpen(false)}
                />
            )}
    </div>
  )
}

export default SideBar
