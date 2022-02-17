import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';


var valami= 'Gábor';

var propsNameExample = 'Dezső';


ReactDOM.render(
  <React.StrictMode>
    <Root name={valami} footSize={42} name2={propsNameExample}/>
  </React.StrictMode>,
  document.getElementById('root')
);

