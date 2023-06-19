import React, { useState } from "react";
import './TrainingDashboard.css';
import TrainingRequestForm from "../forms/TrainingRequestForm";

const TrainingDashboard = (props) => {
    const handleTrainigRequest=(newTraning)=>{
        const newTrainingAdded ={
            ...newTraning   
        }
        props.trainingList(newTrainingAdded);
    }
    return(
        <TrainingRequestForm addedTraining={handleTrainigRequest}/>
    )
}

export default TrainingDashboard;