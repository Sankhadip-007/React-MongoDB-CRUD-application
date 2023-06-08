import React, { useState } from 'react';
//import { DataGrid } from '@mui/x-data-grid';
//import DataTable from './table';
import Form from './form';
import DataDisplay from './table';
//import HeaderComponenet from './components/header_componenet';

// function DataGridExample() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({ name: '', age: '', city: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData([...data, formData]);
//     setFormData({ name: '', age: '', city: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 100 },
//     { field: 'city', headerName: 'City', width: 200 },
//   ];

//   const rows = data.map((row, index) => ({ id: index + 1, ...row }));

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//         <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
//         <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
//         <button type="submit">Add</button>
//       </form>

//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid columns={columns} rows={rows} />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Data Grid Example</h1>
//       <DataTable/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Form/>
      <DataDisplay/>
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <HeaderComponenet/>
//       </Router>
//     </div>
//   );
// }

// export default App;