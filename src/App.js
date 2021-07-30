import React from "react";
import HelloWorld from "./HelloWorld";
import CardRender from "./CardRender";

import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#fff',
    },
    warning: {
      main: '#ffdd00',
    },
    type: 'dark'
  },
  typography: {
    fontFamily: 'Garamond',
    h5: {
      color: '#ffdd00',
    }
  },
  spacing: 8,

})


const App = () => {
  // const [tech] = useState("React");
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        {/* <HelloWorld /> */}
        <CardRender />
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
