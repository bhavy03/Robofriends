import React, { Component } from "react";
import './Father.css'
import Scroll from '../components/Scroll';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';  // as robot is not default here therefore we destructure it

class Father extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }))
    }

    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboRriends</h1>
                    <SearchBox searchchange={this.onsearchchange} />
                    <Scroll>
                        <Cardlist robots={filteredrobots} />
                    </Scroll>
                </div >
            );
        }
    }
}

export default Father;

// here this father component is smart component as it has state
// three things occur in react
// mounting - means the components gets loaded
// updating - the components gets updated
// unmounting - means the component gets deleted when the page is changed