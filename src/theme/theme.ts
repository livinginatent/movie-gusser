import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: "0",
        bg: "linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)",
      },
    },
    colors: {
      gray900: "#171923",
      red: "red",
    },
    fonts: {
      default: "Plus Jakarta Sans",
    },
  },
});

export default theme;
