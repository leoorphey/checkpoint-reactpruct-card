import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Leo"; 

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '22rem', margin: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h3>
          Bonjour{firstName ? ` ${firstName}` : " !"}
        </h3>
        {firstName && (
          <img
            src="https://i.pinimg.com/736x/28/e1/a3/28e1a398fb70196b9a53dbb00fbd63a3.jpg"
            alt="User"
            style={{ borderRadius: '50%', marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
