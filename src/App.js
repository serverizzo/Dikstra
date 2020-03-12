import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExportedExample from './myReactCode/ExportedExample.js'
// import Graph  from './myReactCode/Graph'

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}


/* Note: classes must be capitalized, otherwise they will not work */
class Child extends React.Component{
  render(){
    return(
      <div> <h1> I am a nested child </h1> </div>
    )
  }
}


class MyClass extends React.Component{

  render(){
    return(
      <div> 
        Hello World 
        <Child />
        <ExportedExample />
        {/* <Graph /> */}
      </div>
      
    )
  }

}


export default MyClass;
// export default App;
