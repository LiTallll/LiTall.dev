import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Experience />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Website in construction, come back later !</p>
        <a
          className="btn"
          href="https://github.com/LiTallll"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </header>
      <Home />
      <Projects />
      <Nav />
    </div>
  );
}

export default App;
