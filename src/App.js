
import { useState } from 'react';
import './App.css';
import {Button} from '@material-ui/core/Button';

function App() {


  const [todos, setTodos] = useState(["Take your dog outside", "Give me something to eat"])

  const [input, setInput] = useState("")

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput("")
  };

  return (
    <div className="App">
      <h1>I making a todo App</h1>


      <form action="">
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />

        <button type="submit" disabled={!input} onClick={addTodo}>Add Todo</button>

        <Button variant="contained">Contained</Button>
      </form>



      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
