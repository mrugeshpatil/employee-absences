export interface Employee {
  firstName: string;
  lastName: string;
  id?: string;
}

export interface EmployeeType {
  startDate: string;
  absenceType: string;
  approved: boolean;
  employee: Employee;
  id: number;
}

export interface EmployeeState {
  employeeAbsenceData: EmployeeType[];
  loading: boolean;
  error: string | null;
}

export const initialState: EmployeeState = {
  employeeAbsenceData: [],
  loading: false,
  error: null,
};
