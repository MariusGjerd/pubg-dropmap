import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import TeamList from './components/TeamList';
import Dropzone from './components/Dropzone';
import Team from './components/Team';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Sidebar
        sidebar={<TeamList teams={teams} setTeams={setTeams} />}
        open={sidebarOpen}
        onSetOpen={handleSetSidebarOpen}
        styles={{ sidebar: { background: 'white', width: '250px' } }}
      >
        <button
          onClick={() => handleSetSidebarOpen(true)}
          style={{ position: 'absolute', zIndex: 1000 }}
        >
          <FaBars />
        </button>
        <Dropzone>
          {teams.map((team) => (
            <Team key={team.id} team={team} />
          ))}
        </Dropzone>
      </Sidebar>
    </DndProvider>
  );
};

export default App;
