import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Routes from "./components/Routes.";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        {/*в gh-pages лучше работает HashRouter*/}
        <HashRouter>

            <Header/>

            <Routes/>

        </HashRouter>
    </div>
  );
}

export default App;
