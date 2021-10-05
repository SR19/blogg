
const initialState = {
    blogsData: []
}

 function reducer(state = initialState, action) {  // 'action' : object, contains: type & payload
    switch (action.type) {
        case 'SET_BLOGS_DATA':
            const newBlog = action.payload;
            return {
                ...state,               //so that initial state does not change
                blogsData: [...state.blogsData],    // to change the state, new state!
                newBlog                    //new blog will be inserted in the current blog's end
            }
        
    }
}

export default reducer;