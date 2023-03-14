import React, { useState } from 'react';
import './Passengers.css';


interface Props {
  send:IMachineSender,
  state:IMachineState
}

export const Passengers = ({ send, state }:Props) => {
  const [value, changeValue] = useState('');
  const {passengers} = state.context

  const onChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    changeValue('');
    send('ADD', {newPassenger: value})
  }

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>Agrega a las personas que van a volar ✈️</p>
      <div className='passengers-wrapper'>
        {passengers.length>0 && <h5>Pasajeros</h5>}
        {passengers.map((item:string, index:number) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <input
        id="name"
        name="name"
        type="text"
        placeholder='Escribe el nombre completo'
        required
        value={value}
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button
          className='Passengers-add button-secondary'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className='Passenger-pay button'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};