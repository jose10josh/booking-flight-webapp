import React from 'react';
import './Nav.css';

interface Props {
  state:IMachineState
  send:IMachineSender
}

export const Nav = ({ state, send }:Props) => {
  const goToWelcome = () => {
    send('CANCEL')
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>Book a fly ✈</h1>
      {(!state.matches('initial') && !state.matches('tickets')) &&
        <button onClick={goToWelcome} className='Nav-cancel button-secondary'>Cancelar</button>
      }
    </nav>
  );
};