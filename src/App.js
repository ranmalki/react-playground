import Initials from "./Initials/Initials";
import DayOfWeek from "./DaysOfWeek/DayOfWeek";
import Article from "./Article/Article";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";
import Counter from "./Counter/Counter";
import StudentPicker from "./StudentPicker";
import RandomColorSquare from "./RandomColorSquare";
import './App.css';

function App() {

  function clickHandler() {
    console.log('you clicked');
  }
  return (
    <div>
      {/* <StudentPicker /> */}
      {/* <button onClick={clickHandler}>CLICK ME!</button> */}
      {/* <Counter /> */}

      <Menu>
        <MenuItem> <a href="/" className="home">Homepage</a></MenuItem>
        <MenuItem> <a href="/" className="gallery">Gallery</a></MenuItem>
        <MenuItem> <a href="/" className="contact">Contact</a></MenuItem>
      </Menu>

      <RandomColorSquare />

    {/*  <Initials name="Ran Malki" /> */}
    {/*  <DayOfWeek day={2} /> */}
    {/* <Article title="Header" content="text" /> */}
    </div>
  );
}

export default App;