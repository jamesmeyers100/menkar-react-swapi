import React, { Component } from 'react';
import Planet from '../Planet/Planet';

class PlanetList extends Component {

    render(){
        return (
            <div>
            <h2>All the Planets</h2>
                <ul>
                    {this.props.planetList.map( item => <Planet planet={item}/>)}
                </ul>
            </div>

        );
    }
}

export default PlanetList;

