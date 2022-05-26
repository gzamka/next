import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: "#ba68c8",
        },
    }
  });

  export const Palette = ({children}) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }