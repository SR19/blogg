import reducer from'../Blog';

const updateBlogData= (payload)=> dispatch=>{

    dispatch({               //action
    type: 'SET_BLOGS_DATA',                //action.type
    payload: payload                       //action.payload    
  })

}

export default updateBlogData;