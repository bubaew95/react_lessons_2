import { combineReducers, createStore } from "redux";

import bookReducer from './reducers/booksreducer'

const reducer = combineReducers({
    bookReducer
});

const store = createStore(reducer);

export default store;
