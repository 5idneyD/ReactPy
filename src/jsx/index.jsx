import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

function App() {
  return (
    <div>
        The life of a loner
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);