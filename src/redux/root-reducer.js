import counterReducer from "./counter/counter.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
