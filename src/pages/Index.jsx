import React, { useState } from "react";
import { Box, Flex, Heading, Icon, Link, List, ListItem, Text, VStack, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaTachometerAlt, FaProjectDiagram, FaTasks, FaUsers, FaHistory, FaStream, FaCog } from "react-icons/fa";
import WorkflowGraph from "../components/WorkflowGraph";

const Index = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <VStack w="200px" p="5" spacing="12" bg="gray.800" color="white" align="stretch">
        {/* ... */}
      </VStack>

      {/* Main content */}
      <Container maxW="container.xl" p="5" flex="1">
        <Tabs index={currentTab} onChange={setCurrentTab} isFitted variant="enclosed">
          {/* ... */}
          <TabPanels>
            {/* ... */}
            <TabPanel>
              <Heading size="lg">Workflows</Heading>
              <Text>Manage your workflows here.</Text>
            </TabPanel>
            {/* Other panels are omitted for brevity */}
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Index;
