import React from 'react';
import logo from './logo.svg';
import './App.css';
import H1component from './H1component';
import { H2component } from './H1component'

let macskesz= "feline"

const test = "App-logo"




function App(props) {
  console.log(props)

  return (
    <React.Fragment>

      <div className="App">
        <header className="App-header">
          <img src={logo} className={test} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <H1component name={props.name} labmeret={45} />
          <H1component labakSzama={2} labmeret={45} />
          <H2component name5={props.name2} h2FootSize={props.footSize}>
           
            </H2component>
        </header>
      </div>
      <h3>asd</h3>
    </React.Fragment>
  );
}



export default App;
