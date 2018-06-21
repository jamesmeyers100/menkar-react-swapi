import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        planet: { name: '', climate:'' },
        planetList: [],
    };
  };

  // This is similar to jQuery's onReady
  // It is called by React when the component is loaded and ready to go!
  componentDidMount(){
    console.log('App component monted');
    const url = 'https://swapi.co/api/planets/?format=json'
    this.getPlanets(url);
  };

  async getPlanets(url){
    let nextUrl = url;
    while(nextUrl != null) {
      await axios.get(nextUrl)
        .then((response) => {
          console.log('Got more planets', response.data.results)
          this.setState({planetList: [...this.state.planetList, ...response.data.results]});
          nextUrl = response.data.next;
          console.log('The Next URL is', nextUrl)

        })
        .catch( (error) => {
          console.log(error);
          nextUrl = null;
        })
  }
  }

  render() {
    console.log('These are the planets', this.state.planetList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI Planets</h1>
        </header>
        <div>
        <h2>All the Planets</h2>
                <ul>
                    {this.state.planetList.map(planet => <li key={planet.url}>{planet.name} 
                    where the climate is {planet.climate}</li>)}
                </ul>
          </div>
      </div>
    );
  };
  }

export default App;
