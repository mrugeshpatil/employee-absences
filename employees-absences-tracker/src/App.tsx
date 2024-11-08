import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store/store';
import { fetchEmployeeAbsences } from './api/employee-absences-data';
import './App.css';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { employeeAbsenceData, loading, error } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch(fetchEmployeeAbsences());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Employee absences tracker</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {
        employeeAbsenceData.map(employee => {
          console.log('====> employee', employee)
          return null
        })
      }
    </div>
  );
}

export default App;
