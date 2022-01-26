import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  const [show, setShow] = useState(false)
  const [Task, setTask] = useState([
    {
        id :1,
        kam: 'Doctor Appointment',
        day: '25-jan 5:00pm',
        reminder: true

    },
    {
        id :2,
        kam: 'Car Wash',
        day: '26-jan 6:00pm',
        reminder: true

    },
    {
        id :3,
        kam: 'Food Shopping',
        day: '27-jan 7:00pm',
        reminder: false

    }
])

const delete_task = (id) => {
  setTask(Task.filter(t => t.id!==id))
}

const changeReminder = (id) => {
  console.log('toggle', id)
  setTask(Task.map(t => t.id ===id ?
     {...t, reminder: !t.reminder} : t ))
}

const addtask = (task) =>{
  
  var id = Math.random();
  var newtask = {id,...task}
  console.log(task)
  setTask([...Task, newtask]) 
  
}

const form_show = () =>{
  setShow(!show)
}


  return (
    
    
    <div className="App">
      
      <Header onShow = {form_show} Showform = {show}/>
      {show ? <AddTask onAdd = {addtask}/> : ''}
      {Task.length >0 ? <Tasks task = {Task} 
      onDelete = {delete_task} 
      onToggle = {changeReminder} /> : 'No Tasks to Show'}
      

      <Routes>
       <Route path = '/' exact render =  {(props) => (
         <>
        
         </>

       )
       } />
      <Route path= "about" element = {<About/>} />

      </Routes>
      <Footer />
    </div>
  
   
  );
}

export default App;
