import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import Father from './Containers/Father';
// import Hello from './Hello';
// import App from './App';   // import App from './App.js' it will be the same meaning as react will understand that if no type is used than think it as .js file;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Father />
    {/* <h1>Hello world</h1> */}
    {/* <App /> */}
    {/* <Hello greetings={'hello ' + 'react ninja'} /> */}
    {/* here the greetings is props */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React is the core of the package{it is a view library} that does the DOM manipulation for us it is like the robot we have
// but now we have ReactDOM which is used for websites and as we know that react native can be used for different libraries like mobile phones and VR
