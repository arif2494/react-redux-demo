import { applyMiddleware, createStore } from "redux";
// for dev tool
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
