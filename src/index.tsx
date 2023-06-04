import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route,Link} from 'react-router-dom';
import Abc from './App1';

/**
 * Customize form so each control has more space
 */
const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: '0.8em 0',
        },
      }
    },
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Abc/>
  </ThemeProvider>,
  document.getElementById('root')
);
