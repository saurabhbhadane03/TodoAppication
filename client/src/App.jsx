import { Container } from "@mui/material";
import "./App.css";

import Todo from "./Component/Todo";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{ border: "1px solid black", minHeight: "98vh" }}
    >
      <Todo />
    </Container>
  );
}

export default App;
