
import React,{ createContext, useReducer, useContext} from 'react';

//prepares the datalayer
export const StateContext = createContext();

// wrap the app and provide the datalayer to every component of the app
export const StateProvider = ({initialState, children, reducer})=> (
    <StateContext.Provider value={useReducer(initialState,reducer)}>
        {children}
    </StateContext.Provider>
)
  
//to pull information from the data layer
export const useStateProvider = () => useContext(StateContext);