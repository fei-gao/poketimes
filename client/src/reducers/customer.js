const customerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_POST':
      return payload
    default:
      return state
  }
}

export default customerReducer;
