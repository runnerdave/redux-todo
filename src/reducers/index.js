import {combineReducers} from 'redux';
import visibilityFilter from './visibility-filter';
import todos from './todos';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;