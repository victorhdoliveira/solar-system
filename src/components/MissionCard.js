import PropTypes from 'prop-types';
import React from 'react';
import { IoIosCalendar, IoIosFlag, IoMdPlanet } from 'react-icons/io';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section>
        <div data-testid="mission-card" />
        <p data-testid="mission-name" className="mission-name">{ name }</p>
        <p data-testid="mission-year">
          <IoIosCalendar className="icon" />
          { year }
        </p>
        <p data-testid="mission-country">
          <IoIosFlag className="icon" />
          { country }
        </p>
        <p data-testid="mission-destination">
          <IoMdPlanet className="icon" />
          { destination }
        </p>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
