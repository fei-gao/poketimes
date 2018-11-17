import axios from 'axios'

export const deletePost = (id) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({
      type: 'DELETE_POST',
      id
    })
  }
}

export const getPost = () => dispatch => {
  return axios('/api/posts')
    .then(posts => dispatch({
      type: 'GET_POST',
      payload: posts
    }))
}