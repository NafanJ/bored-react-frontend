import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function App() {
  // State to store the data fetched from the backend
  const [backendData, setBackendData] = useState(null);
  // State for the number of participants (assuming you need it for something else)
  const [numberParticipants, setNumberParticipants] = useState(null);
  // State for the dropdown title
  const [dropdownTitle, setDropdownTitle] = useState('No. participants');

  // Function to fetch data from the API
  const fetchData = () => {
    let url = `https://www.boredapi.com/api/activity`
    if (numberParticipants != null) {
      url = url + `/?participants=${numberParticipants}`
    }
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle clicking on a dropdown item
  const handleSelect = (number, title) => {
    setNumberParticipants(number);
    setDropdownTitle(title);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <div className="CardTitle">
          <Card.Title>Bored?</Card.Title>
          <DropdownButton id="dropdown-basic-button" title={dropdownTitle}>
            <Dropdown.Item onClick={() => handleSelect(null, 'Any')}>Any</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect(1, 'One')}>One</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect(2, 'Two')}>Two</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect(3, 'Three')}>Three</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect(4, 'Four')}>Four</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect(5, 'Five')}>Five</Dropdown.Item>
          </DropdownButton>
        </div>
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
