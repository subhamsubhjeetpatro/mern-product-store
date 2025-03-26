import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
const CreatePage = React.lazy(() => import("./pages/CreatePage"));
import Navbar from "./components/Navbar";
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
