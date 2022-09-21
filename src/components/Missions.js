import React from 'react';
import Mission from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <section className="missionSection">
        <div data-testid="missions" />
        <Title headline="Missões" />
        <div className="missions">
          { Mission.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
