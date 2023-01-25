import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style/MissionCards.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCards">
        <p data-testid="mission-name" id="missionName">
          { name }
        </p>
        <p data-testid="mission-year" id="missionYear">
          { year }
        </p>
        <p data-testid="mission-country" id="missionCountry">
          { country }
        </p>
        <p data-testid="mission-destination" id="missionDestination">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
