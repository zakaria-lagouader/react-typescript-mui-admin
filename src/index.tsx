import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from "react-query";

import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

