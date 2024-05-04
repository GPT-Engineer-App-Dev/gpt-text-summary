import { useState } from "react";
import { Container, VStack, Textarea, Button, Text } from "@chakra-ui/react";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSummarize = () => {
    // Simulate a summary generation (replace this with actual API call)
    const simulatedSummary = text.substring(0, 100) + "..."; // Simulates summarization by truncating
    setSummary(simulatedSummary);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Text Summarizer</Text>
        <Textarea placeholder="Enter your text here..." value={text} onChange={handleTextChange} size="lg" height="200px" />
        <Button colorScheme="blue" onClick={handleSummarize}>
          Summarize Text
        </Button>
        <Textarea placeholder="Summary will appear here..." value={summary} size="lg" height="200px" isReadOnly />
      </VStack>
    </Container>
  );
};

export default Index;
