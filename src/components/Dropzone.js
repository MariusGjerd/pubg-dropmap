// src/components/Dropzone.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import erangel from '../utils/erangel.png';
import miramar from '../utils/miramar.png';

const Dropzone = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(erangel);
  const [, drop] = useDrop(() => ({
    accept: 'team',
  }));

  const toggleBackgroundImage = () => {
    setBackgroundImage((prevImage) => (prevImage === erangel ? miramar : erangel));
  };

  return (
    <div
      ref={drop}
      style={{
        width: '2048px',
        height: '2048px',
        backgroundSize: 'contain',
        backgroundImage: `url(${backgroundImage})`,
        position: 'relative',
      }}
    >
      <button
        onClick={toggleBackgroundImage}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1000,
        }}
      >
        Toggle Map
      </button>
      {children}
    </div>
  );
};

export default Dropzone;
