import React from "react";
import './TrainingItem.css';

const TrainingItem = (props) =>{
    const training = props.trainingitem;
    return(
        <div className="training-item">
                    <div>{training.trainingName}</div>
                    <div>{training.initiatedFrom}</div>
                    <div>{training.trainingDuration}</div>
                    <div>{training.projectName}</div>
                    <div>{training.resouceType}</div>
                    <div>{training.trainingPurpose}</div>
                    <div>{training.skillsImparted}</div>
                    <div>{training.numberOfParticipants}</div>
                    <div>{training.startDate}</div>
                    <div>{training.endDate}</div>
        </div>
    )
}

export default TrainingItem;