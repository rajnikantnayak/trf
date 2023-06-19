import React from "react";
import './TrainingItems.css';
import TrainingItem from "./TrainingItem";

const TrainingItems =(props)=>{
    const trainingList = props.trainings;
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>TrainingName</td>
                        <td>Initiated From</td>
                        <td>Duration</td>
                        <td>Project Name</td>
                        <td>Resource Type</td>
                    </tr>
                </thead>
            </table>
            {trainingList.map((trainig) =>
        
              <TrainingItem trainingitem={trainig} />
             )}</div>
        )
}

export default TrainingItems;