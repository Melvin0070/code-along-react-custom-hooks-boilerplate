import './App.css';
import UseStorage from './useStorage.jsx'
import {useState} from "react";

function App() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const newData = e.target.value;
    setSearch(newData);
  }

  UseStorage(search);

  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;