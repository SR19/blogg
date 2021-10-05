//import React from 'react'
//import Tasks from '../Tasks'
import { FaTrash } from 'react-icons/fa'
//import DeleteIcon from '@mui/icons-material/Delete'


 const Task = ({task,onDelete}) => {
  return(
      <div className='task'>
          <h3>{task.text} <FaTrash onClick={()=> onDelete(task.id)}/> </h3>

    </div>
   )

}
 //          <p>{ task.textd}</p>
export default Task