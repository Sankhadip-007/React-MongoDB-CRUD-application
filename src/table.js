import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams(filter).toString();
      const response = await fetch(`http://localhost:5000/fetchData?${queryParams}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Optional: Print the response for debugging

      // Update the table data after successful form submission
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFilterChange = (event, columnName) => {
    const value = event.target.value;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [columnName]: value,
    }));
  };

  return (
    <div>
      <h1>Data Display</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TextField
                  label="Name"
                  value={filter.name || ''}
                  onChange={(event) => handleFilterChange(event, 'name')}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Age"
                  value={filter.age || ''}
                  onChange={(event) => handleFilterChange(event, 'age')}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="City"
                  value={filter.city || ''}
                  onChange={(event) => handleFilterChange(event, 'city')}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Render the form component */}
      <form submitForm={submitForm} />
    </div>
  );
};

export default DataDisplay;
