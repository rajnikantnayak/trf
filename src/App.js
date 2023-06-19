import logo from './logo.svg';
import './App.css';
import Title from './Components/title/Title';
import TrainingDashboard from './Components/training/TrainingDashboard';
import { useState } from 'react';
import TrainingItems from './Components/TrainingItem/TrainingItems';

const trainings = [
  
]

function App() {
 
const[trainingsList, setTraning] = useState(trainings);
const addTraining=(newTraining) =>{
    setTraning((prevTrainings) =>{
      console.log(newTraining);
      return [newTraining, ...prevTrainings]
    });
}

  return (
    <div className="App">
      <Title />
      <TrainingDashboard trainingList ={addTraining}/>
      <TrainingItems trainings={trainingsList}/>
    </div>
  );
}

export default App;
