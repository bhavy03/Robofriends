import './App.css';
import React,{Component} from 'react';

let naam = "bhavya";
class App extends Component {
  render() {
    return (
      <>
        <nav>
          <li>home</li>
          <li>about</li>
          <li>contacts</li>
        </nav>
        {/* <img src=" " alt="random image" /> */}
        <div className="name">
          <h1>Hello, I am a react developer {naam}</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt nihil voluptates iste, commodi harum dolores laudantium. Eius debitis voluptatem atque recusandae ducimus!</p>
        </div>
      </>
    );
  }
}

export default App;


// we can only return one element
// if two elements are there then use jsx fragment <> jsx </>