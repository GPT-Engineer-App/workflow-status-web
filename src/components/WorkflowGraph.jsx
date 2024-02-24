import React from 'react';
import { Flex, Box, Text, VStack, HStack, Center } from '@chakra-ui/react';

const WorkflowGraph = () => {
  return (
    <VStack spacing={8}>
      {/* Root Node A */}
      <Center w="40px" h="40px" bg="blue.500" color="white" borderRadius="md">
        <Text>A</Text>
      </Center>
      {/* Connections from A to B and C */}
      <HStack justify="space-around" w="full">
        <Box w="2px" h="40px" bg="gray.300" />
        <Box w="2px" h="40px" bg="gray.300" />
      </HStack>
      {/* Nodes B and C */}
      <HStack justify="space-around" w="full">
        <Center w="40px" h="40px" bg="green.500" color="white" borderRadius="md">
          <Text>B</Text>
        </Center>
        <Center w="40px" h="40px" bg="green.500" color="white" borderRadius="md">
          <Text>C</Text>
        </Center>
      </HStack>
      {/* Connection from C to C1 and C2 */}
      <Center w="40px" h="40px" bg="green.500" position="relative">
        <Box w="2px" h="40px" bg="gray.300" position="absolute" />
        <HStack spacing={0} position="absolute" left="-20px" top="40px">
          <Box w="20px" h="2px" bg="gray.300" />
          <Box w="20px" h="2px" bg="gray.300" />
        </HStack>
      </Center>
      {/* Nodes C1 and C2 */}
      <HStack spacing="20px">
        <Center w="40px" h="40px" bg="orange.500" color="white" borderRadius="md">
          <Text>C1</Text>
        </Center>
        <Center w="40px" h="40px" bg="orange.500" color="white" borderRadius="md">
          <Text>C2</Text>
        </Center>
      </HStack>
    </VStack>
  );
};

export default WorkflowGraph;