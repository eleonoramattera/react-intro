//contenitore di tutti i componenti

import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import ClassComponent from "./components/ClassComponent";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="App">
        <Heading
          id={1}
          label="NOME"
          placeholder="inserisci il tuo nome per accedere"
        />
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
          <Mycomponent button="PREMI SUL BOTTONE" />
          <Mycomponent eleonora="testo in latino " />
          <Input
            id={2}
            label="NUMERO"
            placeholder="Inserici il tuo numero e sarai contattato"
          />
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
