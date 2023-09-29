import React from 'react'
import "./PopUp.scss";
const PopUp = ({ isPopupOpen,closePopup}) => {
    const newdata = {
        "boardname": "Name Please",
        "description": "From Front end"
    }
    const createNew = () => {
        
        fetch("http://localhost:8082/create-board", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newdata)
        }).then(() => {
        });
    }
    return (
        <div>
            <div className={`popup-container ${isPopupOpen ? 'open' : ''}`}>
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close-button" onClick={closePopup}>
                                &times;
                            </span>
                            <form onSubmit={createNew}>
                                Enter Board name
                                <input type='text' />
                                Enter description
                                <input type='text'/>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                )}
          </div>
        </div>
    )
}

export default PopUp
