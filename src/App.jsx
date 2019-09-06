import React from 'react';
import './App.css';
import Linear from './Components/Linear';
import Button from '@material-ui/core/Button';
import theme from './theme';
import Paper from './Components/Paper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Paper />
        <Linear />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
