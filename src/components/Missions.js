import React, { Component } from 'react';
import Title from './Title';
// import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

// PlanetCard.propTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired,
// };

export default PlanetCard;
