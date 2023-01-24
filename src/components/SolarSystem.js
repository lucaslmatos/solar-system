import React, { Component } from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <span>
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </span>
      </div>
    );
  }
}

export default SolarSystem;
