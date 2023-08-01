import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>This is another component</h1>
                <p> here we are providing multiple line of codes</p>
                <p>{this.props.greetings}</p>
            </div>
        );
    }
}
// this is nothing but a js function we can also write it as
// const Hello = (props) => {
    // return (
        // <div className='f1 tc'>
            // {/* <h1>This is another component</h1> */}
            // {/* <p> here we are providing multiple line of codes</p> */}
            // {/* <p>{props.greetings}</p> */}
        // {/* </div> */}
    // );
// }

export default Hello;

// here in line 7 we use className instead of class as because it is JSX
// and here f1 and tc are classes from tachyons
// react uses JSX for its virtual DOM for its fake DOM and it compares both the DOM and then changes the real DOM
// so react creates these objects{the JSX} and changes the DOM accordingly