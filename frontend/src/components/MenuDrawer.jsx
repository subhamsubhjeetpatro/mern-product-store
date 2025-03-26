import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

const MenuDrawer = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w={isCollapsed ? "60px" : "240px"}
        h="100vh"
        bg="gray.900"
        color="white"
        p={4}
        transition="width 0.3s"
      >
        {/* Collapse Button */}
        <IconButton
          icon={<HamburgerIcon />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          mb={4}
          colorScheme="whiteAlpha"
          aria-label="Toggle Sidebar"
        />

        {/* Sidebar Menu */}
        <VStack align="start" spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Submenu */}
          <Button
            onClick={() => handleSubmenuToggle("services")}
            rightIcon={
              openSubmenu === "services" ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )
            }
            variant="ghost"
            color="white"
            justifyContent="space-between"
            w="full"
          >
            Services
          </Button>
          <Collapse in={openSubmenu === "services"}>
            <VStack align="start" pl={4} spacing={2}>
              <Link to="/services/web">Web Development</Link>
              <Link to="/services/mobile">Mobile Development</Link>
              <Link to="/services/design">UI/UX Design</Link>
            </VStack>
          </Collapse>

          <Link to="/contact">Contact</Link>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box flex="1" p={4}>
        <h1>Main Content Here</h1>
      </Box>
    </Flex>
  );
};

export default MenuDrawer;
