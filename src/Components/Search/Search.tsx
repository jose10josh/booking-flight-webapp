import { CountryModel } from '@/Models/CountryModel';
import React, { useState } from 'react';
import './Search.css';

interface Props {
  send:IMachineSender
  state:IMachineState
}
export const Search = ({ send, state }:Props) => {
  const [flight, setFlight] = useState('');

  const goToPassengers = () => {
    send('CONTINUE', {selectedCountry: flight})
  }

  const handleSelectChange:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFlight(event.target.value);
  };

  const options = state.context.countries;

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled >Escoge un país</option>
        {options.map((option:CountryModel) => <option value={option.name.official} key={option.name.official}>{option.name.official}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''} className='Search-continue button'>Continuar</button>
    </div>
  );
};