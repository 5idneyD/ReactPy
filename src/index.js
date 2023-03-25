import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';


function App() {
  return (
    <div>
      <div className="container">
        <div className="navBar">
          <div></div>
          <div>Sign Up</div>
          <div>Login</div>
          <div>About Us</div>
          <div></div>
        </div>
        <div className="innerContainer">
          <div><h1><u>Basic Accounting</u></h1></div>
          <div><h2>Welcome to Our Accounting Software!<br />This software has been built by hand by accountants for accountants</h2></div>
        </div>
      </div>

    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);