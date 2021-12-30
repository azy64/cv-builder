import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import resumeReducer from './resume/resumeReducer';

const reducer = combineReducers({
  resumeReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;