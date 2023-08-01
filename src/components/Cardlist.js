import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
    // here this cardlist function is pure(or dumb) function 
    // as it gets the input and returns the same output as if it receives the same robot it will return the same output
    // props never change they are only input
    // state is simply an object that describes your app
    // props are simply things that comes out of 'state'
    const cardarray = robots.map((user, i) => {
        return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
        />);
    })
    return (
        <div>
            {cardarray}
        </div>
    );
}

export default Cardlist;