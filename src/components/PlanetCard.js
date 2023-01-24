import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="card">
        <p data-testid="planet-name" className="name">
          { planetName }
        </p>
        <img
          src={ planetImage }
          className={ planetName }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
