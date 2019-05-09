import { createStore, combineReducers, compose } from "redux";

import placesReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

// DEV is a react native global variable that is only true when you are in Development mode
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
