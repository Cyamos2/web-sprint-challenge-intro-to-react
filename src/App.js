import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios
  .get("https://swapi.dev/api/people/")
  .then(res => {setData(res.data)})

}
, ["https://swapi.dev/api/people/"]);

  return (
    <div className="App">
      {data.map(ele => {
        return <Character data={ele}/>
      }
      )}
      
    </div>
  );
}

export default App;
