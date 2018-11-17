const postReducer = (state = [], action) => {
  console.log(state.posts)
  switch (action.type) {
    case 'GET_POST':
      return action.payload
    // case 'DELETE_POST':
    // let newPosts = state.posts.filter(post => {
    //   return post.id !== action.id
    // })
    // return {
    //   ...state,
    //   posts: newPosts
    // }
    default:
      return state
  }
}

export default postReducer;
