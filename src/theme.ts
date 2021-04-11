import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    fontFamily: ["'Inter'", "sans-serif"].join(","),
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
