//imports nothing which i dont understand
const Todo = ({ todo }) => {
  // somewhere there is a todo Array(App.js) there is going to be a loop that plugs each todo item into an h2 each time(the loop is in components/List.js its a map)
  return (
    <div>
      <h2>{todo.item}</h2>
    </div>
  );
};

export default Todo; //ship it
