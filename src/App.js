//contenitore di tutti i componenti

import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import ClassComponent from "./components/ClassComponent";

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
          <ClassComponent content="contentuno del componente a classi" />
          <ClassComponent content="contentuno del componente a classi 2" />
          <Mycomponent />
          <Mycomponent eleonora="testo in latino " />
        </header>
        <footer>
          <Footer
            title="About Us"
            content="footer 1"
            color="lightblue"
            bg="darkblue"
          />
          <Footer title="Work with us" content="footer 2" color="blue" />
          <Footer
            title="P. IVA 4567678"
            content="footer 3"
            color="darkblue"
            bg="lightblue"
          />
        </footer>
      </div>
    </>
  );
}

export default App;
