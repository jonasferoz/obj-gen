import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    </div>
  );
}

export default App;


{/*

  Create a component 
  
  1) with a form  
  2) that accepts a color. 
  3) when submitted add a box,
  to the set of boxes with the appropriate color.
  4) The boxes should appear next to one another and wrap if neaded


  ~Planning

  1. Form.js
      a) will take input
      - e.target.value
      - conditional rendering? i.e tell use choose one of 7 colors

      b) submit button
      - Upon submit, sends up the argument (onSubmission) to App.JS


  2. ColorDisplay.js
      - Has all of the color blocks
      - using props

  3. App.js
      a) takes form and color
      b) const [Color, Color] = useState("");
      c) colorHandler = (onSubmission) => {
        setSubmitColor(onSubmission) }

      Return?
      d) <Form onSubmission={colorHandler} />
      e) <ColorDisplay colorForBox={Color}

    4. CSS



WHERE DOES THIS? APP? const [list of colors : Red, Yellow, Blue, Orange, Green, Violet, Black]



*/}