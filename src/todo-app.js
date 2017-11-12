import AddTodo from '../containers/add-todo';

export const TodoApp = () => (  
    <div>
      <AddTodo />
      <VisibleTodoList />          
      <Footer />
    </div>    
);