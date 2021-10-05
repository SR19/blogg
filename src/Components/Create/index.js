//import React from 'react'
import { TextField, Box, Paper, Typography, Button } from "@material-ui/core"
import {useState} from "react"
import updateBlogData from "../Store"
import Blog from "../Blog"
import { useDispatch, useSelector} from "react-redux"


const AddTask = ({onAdd}) => {




  const blogsData= useSelector(state=> state.blogsData)
   console.log(blogsData)
    const [text, setText] = useState('')
    const [textd, setDes] = useState('')
    const dispatch = useDispatch()
 // console.log(textd, text)
  
  
  const onSubmit = (e) => {
      
    const payload = {
      id: updateBlogData.length - 1,
      text : text,
      textd : textd
      
    }

    dispatch(updateBlogData(payload));

        e.preventDefault()
        if (!text) {
            alert('Please add text')
            return
        }
         
        onAdd({ text, textd })
    setText('')
    setDes('')
    }
    
    
    
    return (
            
        <Paper>
            <Typography variant="h4" component="h1" gutterBottom>
          Create New Blog Here!
        </Typography>
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '500'},
      }}
      noValidate
      autoComplete="off"
        >
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            
                            onChange={ (e)=> setText(e.target.value)}/>
                 
            </div>
            <div>
                <TextField
                id="outlined-multiline-basic"
                 label="Description"
                 multiline
                 rows={16}
                 variant="outlined"
                 fullWidth
                 
                 onChange={ (e)=> setDes(e.target.value)}           
                   />
                  </div>
            {/*<input type='submit' value='Save Task' className='btn btn-block' />*/}
            
            *<Button
              variant="contained"
              color="primary" onClick={onSubmit}>
              Save
            </Button>
            
            </form>
            </Box>
            </Paper>
    )
}

export default AddTask