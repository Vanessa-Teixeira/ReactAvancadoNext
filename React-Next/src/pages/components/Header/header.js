import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Seja vindo!!</h1>
          <p className="lead">Essa são , algumas ferramenta que tenho conhecimento.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default header;