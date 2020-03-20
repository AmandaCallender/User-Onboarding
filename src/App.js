import React from "react";
import styled from "styled-components";

import UserForm from "./Form";
import "./App.css";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const testInfo = {
  name: "Tifa",
  email: "Tifa@FFVII.com",
  password: "Ilovecloud",
  termsOfService: true,
  membership: "gold",
  color: "blue",
  role: "DPS",
};

function App() {
  return (
    <Container>
      <UserForm {...testInfo} />
    </Container>
  );
}

export default App;
