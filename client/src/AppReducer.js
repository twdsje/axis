import { combineReducers } from "redux";
import messages from "./Messages/MessagesReducer";

const appReducer = combineReducers({
  messages
});

export default appReducer;
