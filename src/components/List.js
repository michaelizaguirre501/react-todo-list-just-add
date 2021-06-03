import Todo from "./Todo"; // needs to have the todo component you made in components/Todo. js

const List = ({ todos }) => {
  return (
    <div>
      {todos.map(
        (
          todo //every todo in todos array of objects set the key of each todo we are returing to its id and the todo to the content (cuz its key is todo)
        ) => (
          <Todo key={todo.id} todo={todo} />
        ) //^--crispyness
      )}
    </div>
  );
};

export default List; // ship it
