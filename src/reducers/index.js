import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './posts_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer
});

export default rootReducer;
