import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        // Estado inicial
    });

    const someAction = () => {
        // Lógica de la acción
    };

    return (
        <AppContext.Provider value={{ state, setState, someAction }}>
            {children}
        </AppContext.Provider>
    );
};

