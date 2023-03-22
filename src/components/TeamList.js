// src/components/TeamList.js
import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';


const TeamList = ({ teams, setTeams }) => {
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState(null);

  const handleAddTeam = () => {
    if (teamName && teamLogo) {
      setTeams([...teams, { id: uuidv4(), name: teamName, logo: teamLogo }]);
      setTeamName('');
      setTeamLogo(null);
    }
  };

  const handleDeleteTeam = (id) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  const handleFileChange = (event) => {
    setTeamLogo(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <h2>Teams</h2>
      <div>
        {teams.map((team) => (
          <div key={team.id}>
            <img src={team.logo} alt={team.name} width="50" />
            <span>{team.name}</span>
            <button onClick={() => handleDeleteTeam(team.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team name"
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleAddTeam}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default TeamList;
