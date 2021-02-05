import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistedReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export { store, persistor };
