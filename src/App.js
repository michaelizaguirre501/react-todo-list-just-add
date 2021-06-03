// this is an important file its the whole view we bring components in here, right now there is also an array of objects we are using instead of having a backend for simplicity
import { useState } from "react"; // allows us to use state in our functional components
import Header from "./components/Header"; // header component
import List from "./components/List"; //list component
import AddTodo from "./components/AddTodo"; // todo component input you build a component you bring it in

function App() {
  // this whole thing gets plugged into the dom

  const [todos, setTodos] = useState([
    // pretend like u did a mongo db find and this is what you got back ;)
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000); // sets the id cuz you need an ID
    const newTodo = { id, ...todo }; // the todo is an object that has a id key using an implied key and the parameter of this function
    setTodos([...todos, newTodo]); // makes the todos array of obects have this new object and all the other objects with the spread
  };

  return (
    // this is the view
    <div className="container">
      {/*whole return needs to be in an element or empty tags?*/}{" "}
      {/*class name is weird because this is jsx*/}
      <Header title="Todo List" />{" "}
      {/*set the title of this header, and we told the component whtever is in the title should go into the h1*/}
      <AddTodo onAdd={addTodo} />{" "}
      {/*Im really confused here if you read this i dont get it*/}
      <List todos={todos} />{" "}
      {/*the list here is a component the prop we are passing in is the object above, that component iterates thru the array and makes h2s*/}
    </div>
  );
}

export default App;
