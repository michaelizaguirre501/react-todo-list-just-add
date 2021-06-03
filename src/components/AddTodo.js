import { useState } from "react"; // this is allowing us to use state variables in our functional component

const AddTodo = ({ onAdd }) => {
  // functional component creation
  const [item, setItem] = useState(""); // setting the state of this component saying hey there is going to be an item state and setItem state(i think this is what is inside of an input)

  const onSubmit = (e) => {
    // defining an on submit function to run on our input
    e.preventDefault(); //says if the event doesnt go as planned dont do what u usually would
    onAdd({ item }); // this is what the above function takes in

    setItem(""); // clears the input when the item is added
  };

  return (
    // this is the form that is returned. we will plug it into the dom in src/App.js
    <form onSubmit={onSubmit}>
      {" "}
      {/*event listener which handles state is called on submit and it runs the code from line 7 */}
      <label>Add Todo:</label>
      <input
        type="text"
        placeholder="Todo Item"
        value={item}
        onChange={(e) => setItem(e.target.value)} //onChange event--> setItem(line 10) takes in the value of the input
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default AddTodo; //sends it to be used outside of here
