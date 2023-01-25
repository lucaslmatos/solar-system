import React, { Component } from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';
import './Style/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
          <hr />
        </div>
      </div>
    );
  }
}

export default SolarSystem;
