import {connect} from 'react-redux';
import toggleTodo from '../actions/toggle-todo';
import TodoList from '../components/todo-list';

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
};

const mapStateProps = (state) => {
    const todos = getVisibleTodos(
        state.todos,
        state.visibilityFilter
    );
    return {
        todos,
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};

const VisibleTodoList = connect(
    mapStateProps,
    mapDispatchProps
)(TodoList);

export default VisibleTodoList;