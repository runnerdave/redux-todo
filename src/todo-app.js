import React from 'react';
import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible-todo-list';
import Footer from './components/footer';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default TodoApp;