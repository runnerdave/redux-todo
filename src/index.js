import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import TodoApp from './todo-app';
import todoApp from './reducers';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
