import React, { useState } from "react";
import './ErrorModal.css';

const ErrorModal = (props)=> {
    const onConfirm = () =>{
        props.onConfirm();
    }
   return(
    <>
        <div className="modal-wrapper" onClick={onConfirm}></div>
        <div className="moal-container">
            <h1>{props.title}</h1>
        </div>
    </>
   )
}

export default ErrorModal;