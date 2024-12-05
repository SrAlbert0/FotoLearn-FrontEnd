import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './store/appContext';
import Layout from './layout';
import '../styles/index.css';

ReactDOM.render(
    <AppProvider>
        <Layout />
    </AppProvider>,
    document.getElementById('root')
);

