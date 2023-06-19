import React, { useRef, useState } from "react";
import "./TrainingRequestForm.css";
import ErrorModal from "../errormodel/ErrorModal";
import * as XLSX from 'xlsx';

const TrainingRequestForm = (props) => {
    const trainingName = useRef('');
    const initiatedFrom = useRef('');
    const trainingDuration = useRef('');
    const projectName = useRef('');
    const resouceType = useRef('');
    const trainingPurpose = useRef('');
    const skillsImparted = useRef('');
    const numberOfParticipants = useRef('');
    const startDate = useRef('');
    const endDate = useRef('');
    const participants = useRef('');

    const[showModal, setShowModal] = useState(false);

    const onConfirm = ()=>{
        setShowModal(false);
    }

    function submitTraining(event){
        const training = {trainingName: trainingName.current.value,
            initiatedFrom: initiatedFrom.current.value,
            trainingDuration: trainingDuration.current.value, 
            projectName: projectName.current.value, resouceType:resouceType.current.value,
            trainingPurpose: trainingPurpose.current.value,
            skillsImparted: skillsImparted.current.value,
            numberOfParticipants: numberOfParticipants.current.value, 
            startDate: startDate.current.value, 
            endDate: endDate.current.value, 
            participants: participants.current.value};
             

        props.addedTraining(training);

        //Reset values of input fields
        handleReset();
       event.target.reset();

        event.preventDefault();
    };

    const handleReset = ()=>{
        trainingName.current.value = '';
        initiatedFrom.current.value ='';
       /* trainingDuration.current.value=null;
        projectName.current.value=null;
        resouceType.current.value=null;
        trainingPurpose.current.value=null;
        skillsImparted.current.value=null;
        numberOfParticipants.current.value=null; 
        startDate.current.value=null;
        endDate.current.value=null;
        participants.current.value=null;*/
    }

    const addParticipantsHandler =async (event) =>{
        console.log('start reading file');
        const file = event.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const sheet  = workbook.Sheets[workbook.SheetNames[1]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        
    }

    return(
        <div>
           {showModal &&  <ErrorModal title="Error" onConfirm={onConfirm}/>}
        <form onSubmit={submitTraining}>
            <div className="form-container">
           <table>
                <tr>
                    <td>
                        <label>Traning Name:</label>
                        <input type="text" ref={trainingName} ></input>
                    </td>
                    <td>
                        <label>Initiated From:</label>
                        <input type="text" ref={initiatedFrom}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Training Duration:</label>
                        <input type="number" ref={trainingDuration}></input>
                    </td>
                    <td>
                        <label>Project Name:</label>
                        <input type="text" ref={projectName}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Traing Mode:</label>
                        <select id="mode" name="trainingmode">
                            <option value="java">Java</option>
                            <option value="springboot">Spring Boot</option>
                        </select>
                    </td>
                    <td>
                        <label>Training Type:</label>
                        <select>
                            <option value="online">Online</option>
                            <option value="classroom">Classroom</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Resource Type:</label>
                        <input type="text" ref={resouceType}></input>
                    </td>
                    <td>
                        <label>Purpose of Training:</label>
                        <input type="text" ref={trainingPurpose}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Skills to be imparted:</label>
                        <input type="text" ref={skillsImparted}></input>
                    </td>
                    <td>
                        <label>Number of participants:</label>
                        <input type="number" ref={numberOfParticipants}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Training start date:</label>
                        <input type="date" ref={startDate}></input>
                    </td>
                    <td>
                        <label>Training end date:</label>
                        <input type="date" ref={endDate}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Participants:</label>
                        <input type="file" onChange={addParticipantsHandler}></input>
                    </td>
                </tr>
           </table>
           <button>Submit</button>
        </div>
        </form>
        </div>
    )
}

export default TrainingRequestForm;