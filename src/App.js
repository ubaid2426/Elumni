import { ChakraProvider } from "@chakra-ui/react";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <ChakraProvider>
        <ContactUs />
      </ChakraProvider>
    </div>
  );
}

export default App;
