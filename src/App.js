import Form from './Components/Form';
import DisplayColor from './Components/DisplayColor';
import './App.css';
import React, {useState} from 'react';



function App() {

  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [orange, setOrange] = useState(false);
  const [green, setGreen] = useState(false);
  const [purple, setPurple] = useState(false);
  const [black, setBlack] = useState(false);




  
  return (
    <div>
      <Form 
      blue={blue}
      setBlue={setBlue}
      red={red}
      setRed={setRed}
      yellow={yellow}
      setYellow={setYellow}
      orange={orange}
      setOrange={setOrange}
      green={green}
      setGreen={setGreen}
      purple={purple}
      setPurple={setPurple}
      black={black}
      setBlack={setBlack}
      />

      <DisplayColor
      blue={blue}
      red={red}
      yellow={yellow}
      orange={orange}
      green={green}
      purple={purple}
      black={black}
      /> 
    </div>
  );
}

export default App;
