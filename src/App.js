import './App.css';
import SpringButton from "./explore/spring-button/SpringButton";
import Accordion from "./explore/accordion/Accordion";
import Test from "./explore/test";
import FadingGreeting from "./explore/fading-greetings";
import Nav from "./nav/Nav";

function App() {
  return (
    <div className="App position-relative d-flex align-items-baseline">
        <Nav/>
        <div>
            <Test/>
            <div style={{padding: "40px"}}/>
            <FadingGreeting/>
            <div style={{padding: "40px"}}/>
            <SpringButton/>
            <div style={{padding: "40px"}}/>
            <Accordion/>
        </div>
    </div>
  );
}

export default App;
