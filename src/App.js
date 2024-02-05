import { useState } from 'react';
import './App.css';
import Heading from './component/Heading';
import List from './component/List';

function App() {
  const [inputText, setInputText] = useState('');
  const [itemArray, setItemArray] = useState([]);

  const [crossOver, setCrossOver] = useState(false);

  function handleChange(event) {
    const note = event.target.value;
    setInputText(note);
  }

  function handleButtonClick() {
    setItemArray(preValue => [...preValue, inputText]);
    setInputText('');
  }

  function alert() {
    setCrossOver(preValue => !preValue);
  }

  return (
    <>
      <div className="note-container">
        <Heading />
        <input
          type="text"
          placeholder="Enter task"
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={handleButtonClick}>Add</button>
        <ul>
          {itemArray.map((item, id) => (
            <List id={id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
