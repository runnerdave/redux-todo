import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import TodoApp from './todo-app';
import todoApp from './reducers';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Provider store={createStore(todoApp)}>
	    <TodoApp />
	</Provider>, div);
});
