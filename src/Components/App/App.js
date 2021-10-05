import React from 'react';
import '../Create/style.css'
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {  Paper } from '@material-ui/core';
import AddTask from '../Create';
import { useSelector } from 'react-redux';
import Tasks from '../Tasks';
import { useState } from "react";
import updateBlogData from '../Store';
import reducer from '../Blog';
import '../Create'

function App() {



         const [tasks, setTasks]= useState([ {
        id: 1,
           text: 'Health',
        
    },

     {  
        id: 2,
        text: 'Travel',
    },])

  
  
  
  const addTask = (task) => {
    //console.log(task);
    const id=Math.floor(Math.random()*10000)+1
    const newTask = { id, ...task }
  setTasks([...tasks,newTask])
  }
  


  const deleteTask = (id) => {
    
   console.log('delete',id)
     setTasks(tasks.filter((task)=>task.id!==id))

  }
  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Create Your Blog!
        </Typography>
        
        
      </Paper>

       <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={ deleteTask}/>
    </Container>


    
  );
}
export default App;