import React from 'react';
import logo from './logo.svg';
import './App.css';
import H1component from './H1component';
import { H2component } from './H1component'

let macskesz= "feline"

const test = "App-logo"

function App() {
  return (
    <React.Fragment>

      <div className="App">
        <header className="App-header">
          <img src={logo} className={test} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <H1component name={macskesz}>
            <div>H1gyereke
              <div>
                kisdiv              
              </div>  
            </div>
          </H1component>
          <H2component>
           szöveg 
            </H2component>
        </header>
      </div>
      <h3>asd</h3>
    </React.Fragment>
  );
}



export default App;
