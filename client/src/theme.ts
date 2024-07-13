"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { grey} from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      light: grey[600],
      main: '#000',
    },
  },
});

export default theme;
