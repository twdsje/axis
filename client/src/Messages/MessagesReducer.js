var initialState = 
{
  received: []
}
  
const MessagesReducer = (state = initialState, action ={}) => {
  var newState = 
  {
    received: [...state.received]
  }
    
  switch (action.type) {
    case "MESSAGE":
      newState.received.push(action.message);
      return newState;
    default:
      return state;    
  }
};
 
 export default MessagesReducer