import style from './List.style.css';
import { useState } from 'react';

function List(props) {
  const [crossOver, setCrossOver] = useState(false);

  function alert() {
    setCrossOver(preValue => !preValue);
  }

  return (
    <li onClick={alert} style={{ textDecoration: crossOver && 'line-through' }}>
      {props.item}
    </li>
  );
}

export default List;
