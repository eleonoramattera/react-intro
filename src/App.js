//contenitore di tutti i componenti

import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Heading />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impara react
          </a>
          <Mycomponent />
          <Mycomponent eleonora="testo in latino " />
        </header>
        <footer>
          <Footer title="About Us" />
          <Footer title="Work with us" />
          <Footer title="P. IVA 4567678" />
        </footer>
      </div>
    </>
  );
}

export default App;
