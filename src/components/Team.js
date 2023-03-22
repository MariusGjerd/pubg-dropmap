// src/components/Team.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const Team = ({ team, handleMove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'team',
    item: { id: team.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragEnd = (e) => {
    const newPosition = { x: e.clientX, y: e.clientY };
    setPosition(newPosition);
    if (handleMove) {
      handleMove(team.id, newPosition);
    }
  };

  return (
    <div
      ref={drag}
      style={{
        cursor: 'move',
        position: 'absolute',
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
      }}
      onDragEnd={handleDragEnd}
    >
      <img src={team.logo} alt={team.name} width="50" />
      <span>{team.name}</span>
    </div>
  );
};

export default Team;
