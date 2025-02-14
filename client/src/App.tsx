import { ThemeProvider } from "@emotion/react";
import { FC } from "react";
import theme from "./theme";
import { RouterProvider } from "react-router";
import Router from "./routes";
import { GlobalStyles } from "@mui/material";
import style from "./theme/styles";

const App:FC = ()=>{
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={style}/>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  )
}

export default App;