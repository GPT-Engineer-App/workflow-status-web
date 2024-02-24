import React, { useState } from "react";
import { Box, Flex, Heading, Icon, Image, Link, List, ListItem, Text, VStack, Spacer, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaTachometerAlt, FaProjectDiagram, FaTasks, FaUsers, FaHistory, FaStream, FaCog } from "react-icons/fa";

const Index = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <VStack w="200px" p="5" spacing="12" bg="gray.800" color="white" align="stretch">
        <Box>
          <Heading mb="4" size="md">
            WorkflowApp
          </Heading>
        </Box>
        <Box>
          <List spacing="2">
            <ListItem>
              <Link onClick={() => setCurrentTab(0)}>
                <Icon as={FaTachometerAlt} /> Dashboard
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(1)}>
                <Icon as={FaProjectDiagram} /> Workflows
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(2)}>
                <Icon as={FaTasks} /> Tasks
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(3)}>
                <Icon as={FaUsers} /> Workers
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(4)}>
                <Icon as={FaHistory} /> History
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(5)}>
                <Icon as={FaStream} /> Logs
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setCurrentTab(6)}>
                <Icon as={FaCog} /> Configuration
              </Link>
            </ListItem>
          </List>
        </Box>
      </VStack>

      {/* Main content */}
      <Container maxW="container.xl" p="5" flex="1">
        <Tabs index={currentTab} onChange={setCurrentTab} isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <Icon as={FaTachometerAlt} /> Dashboard
            </Tab>
            <Tab>
              <Icon as={FaProjectDiagram} /> Workflows
            </Tab>
            {/* Other tabs are omitted for brevity */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading size="lg">Dashboard</Heading>
              <Text>Welcome to the WorkflowApp dashboard!</Text>
              {/* Dashboard content goes here */}
            </TabPanel>
            <TabPanel>
              <Heading size="lg">Workflows</Heading>
              <Text>Manage your workflows here.</Text>
              {/* Workflows content goes here */}
            </TabPanel>
            {/* Other panels are omitted for brevity */}
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Index;
