import {combineReducers} from 'redux';
import todo from './todo';
import visibilityFilter from './visibility-filter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default rootReducer;