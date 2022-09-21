import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <>
        <div data-testid="planet-card" />
        <p>
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </>
    );
  }
}

export default PlanetCard;
