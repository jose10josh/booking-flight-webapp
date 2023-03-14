import React from 'react';
import { Passengers } from '../../Components/Passengers/Passengers';
import { Search } from '../../Components/Search/Search';
import { Tickets } from '../../Components/Tickets/Tickets';
import { Welcome } from '../../Components/Welcome/Welcome';
import './StepsLayout.css';

interface Props {
  state:IMachineState
  send:IMachineSender
}

export const StepsLayout = ({ state, send }:Props) => {
  const renderContent = () => {
    if(state.matches('initial')) return <Welcome send={send}/>;
    if(state.matches('search')) return <Search send={send} state={state}/>;
    if(state.matches('tickets')) return <Tickets send={send} state={state} />;
    if(state.matches('passengers')) return <Passengers send={send} state={state} />;
    return null;
  };

  return (
    <div className='StepsLayout'>
      {renderContent()}
    </div>
  );
};