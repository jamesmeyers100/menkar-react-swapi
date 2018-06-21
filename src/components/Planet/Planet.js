import React, { Component } from 'react';

class Planet extends Component {

    render(){
        return (
            <div>
            <ul>

                <li key={this.props.planet.url}>{this.props.planet.name}
                  {' '} where the climate is {this.props.planet.climate}</li>

            </ul>
            </div>
        );
    }
}

export default Planet;