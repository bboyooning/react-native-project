import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export type Rootstate = ReturnType<typeof rootReducer>;

export default rootReducer;
