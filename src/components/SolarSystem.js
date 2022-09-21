import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="planetSection">
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <ul className="planets">
          { Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          )) }
        </ul>
      </section>
    );
  }
}

export default SolarSystem;
