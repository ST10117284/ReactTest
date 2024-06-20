import React, { useState, useEffect } from 'react';
import '../CSS/Table.css';

const DataTable = () => {
  const [corporateData, setCorporateData] = useState({});
  const [selectedTable, setSelectedTable] = useState('1'); // Initial selected table

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/GetCorporateData', {
          headers: {
            'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCorporateData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty array as second argument ensures effect runs only on mount

  // Handle change of selected corporate table
  const handleTableChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTable(selectedValue);
  };

  // Get table headers dynamically from data keys
  const tableHeaders = Object.keys(corporateData[selectedTable] || {});
// sort by logic
  return (
    <div className="data-container">
      <h1>Filter By Corporate: ID</h1>
      <select value={selectedTable} onChange={handleTableChange} className="dropdown">
        <option value="0">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
      </select>
      <br />
      <table className="data-table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} className="table-header">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tableHeaders.map((header) => (
              <td key={header}>{corporateData[selectedTable]?.[header]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
