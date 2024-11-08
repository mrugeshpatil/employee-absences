import React, { useState } from "react";
import { EmployeeType } from "../../../interfaces/employee-types";

interface EmployeeTableProps {
  theadData: string[];
  employeeAbsenceData: EmployeeType[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  theadData,
  employeeAbsenceData,
}) => {
  const [employeeAbsences, setEmployeeAbsences] = useState<EmployeeType[]>([]);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");
  const [sortType, setSortType] = useState("initial");

  const showAbsences = (employee: string) => {
    setSelectedEmployeeName(employee);
    const employeeLeaves = employeeAbsenceData.filter(
      (person) =>
        `${person.employee.firstName} ${person.employee.lastName}` === employee
    );
    setEmployeeAbsences(employeeLeaves);
  };

  const handleSort = (columnName: string) => {
    setSortType(sortType === "initial" || sortType === "desc" ? "asc" : "desc");
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {theadData.map((columnName) => (
              <th key={columnName} onClick={() => handleSort(columnName)}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employeeAbsenceData.map((emp) => {
            const employeeFullName = `${emp.employee.firstName} ${emp.employee.lastName}`;
            return (
              <tr key={emp.id} className={emp.approved ? "" : "danger"}>
                <td>{emp.startDate}</td>
                <td>NA</td>
                <td onClick={() => showAbsences(employeeFullName)}>
                  {employeeFullName}
                </td>
                <td>{emp.approved ? "Approved" : "Pending"}</td>
                <td>{emp.absenceType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedEmployeeName && (
        <div className="modal">
          <h2>Employee absences record for {selectedEmployeeName}</h2>
          <button onClick={() => setSelectedEmployeeName("")}>Close</button>
          <table>
            <thead>
              <tr>
                <th>Start date</th>
                <th>End date</th>
                <th>Absence Type</th>
              </tr>
            </thead>
            <tbody>
              {employeeAbsences.map((emp) => (
                <tr key={`${emp.employee.id}-${emp.startDate}`}>
                  <td>{emp.startDate}</td>
                  <td>NA</td>
                  <td>{emp.absenceType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default EmployeeTable;
