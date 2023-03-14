import React from 'react';
import { useMachine } from '@xstate/react';

import './BaseLayout.css';
import { Nav } from '../../Components/Nav/Nav';
import { bookingMachine } from '../../Machines/bookingMachine';
import { StepsLayout } from '../StepLayout/StepsLayout';

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log('State Machine', state.value, state.context);

  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send}/>
    </div>
  );
}