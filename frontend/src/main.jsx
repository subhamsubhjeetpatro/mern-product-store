import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import MenuDrawer from "./components/MenuDrawer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
        {/* <MenuDrawer /> */}
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
