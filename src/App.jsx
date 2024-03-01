import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // State to store the data fetched from the backend
  const [backendData, setBackendData] = useState(null);

  // Function to fetch data from the API
  const fetchData = () => {
    fetch("https://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Bored?</Card.Title>
        {/* Display the fetched activity or a loading message */}
        <Card.Text style={{ textTransform: 'capitalize' }}>
          {backendData ? backendData.activity : 'Loading...'}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ textTransform: 'capitalize' }}>
          Type: {backendData ? backendData.type : 'Loading...'}
        </ListGroup.Item>
        <ListGroup.Item>
          Participants: {backendData ? backendData.participants : 'Loading...'}
        </ListGroup.Item>
        <ListGroup.Item>
          Price: {backendData ? backendData.price : 'Loading...'}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={fetchData}>Refresh Activity</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
