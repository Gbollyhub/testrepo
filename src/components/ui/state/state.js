import React from 'react'
export default function State({state, closeModal, message}) {
    return(
        <>
        <div style={{ zIndex : 999999 }}className="app-modal-overlay">
    <div className="app-modal-div success" style={{ textAlign:'center'}}>
        {
            state == 'success' ?  <div > <div className="alert-icon"></div> <div className="alert-message">{message}</div> </div> : 
            
            <div> 
            <div className="alert-icon failed"></div>
            <div className="alert-message" style={{width:'200px'}}>{message}</div>
            </div>
            
        } 
     <div onClick={closeModal} style={{cursor:'pointer'}} className="app-modal-button">Close</div>
    </div>
  </div>
        </>
    )
}