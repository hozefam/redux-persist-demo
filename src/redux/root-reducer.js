import counterReducer from "./counter/counter.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
