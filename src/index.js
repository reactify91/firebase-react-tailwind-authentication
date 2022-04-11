import React from 'react';
import "./index.css";
import {UserProvider} from "./context/UserAuth";
import {createRoot} from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const app = createRoot(root);
app.render(<UserProvider><App /></UserProvider>);

