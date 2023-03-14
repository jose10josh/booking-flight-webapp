import { CountryModel } from '@/Models/CountryModel';
import { fetchCountries } from '../Utils/api';
import { assign, createMachine } from 'xstate';



const fillCountries = {

  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event:{data:CountryModel}) => {console.log({event});
             return event.data},
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine<IMachineContext>({
  id: 'buy plane tickets',
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry:"",
    error: "",
    countries: []
  },
  states: {
    initial: {
      entry: 'setDefaults',
      on: {
        START: {
          target:"search",
          actions:'printStart'
        }
      }
    },
    search:{
      entry:'printEntry',
      exit:'printExit',
      on: {
        CONTINUE: {
          target:'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: "initial"
      },
      ...fillCountries
    },
    passengers:{
      on: {
        DONE: {
          target:'tickets',
          cond: "moreThanOnePassenger"
        },
        CANCEL: "initial",
        ADD: {
          target: 'passengers',
          actions: (context, event) => {context.passengers.push(event.newPassenger)}
        }
      }
    },
    tickets:{
      after: {
        5000: {
          target: 'initial'
        }
      },
      on: {
        FINISH: 'initial'
      }
    },
  },
},
{
  actions: {
    printStart: () => {
      console.log('Starting...');
    },
    printEntry: () => {
      console.log("print Entry");
    },
    printExit: () => {
      console.log("print Exit");
    },
    setDefaults: (context, event) => {
      context.passengers = [];
      context.selectedCountry = "";
    },
  },
  guards: {
    moreThanOnePassenger:(context) => {
      return context.passengers.length > 0;
    }
  }
});

export {bookingMachine}