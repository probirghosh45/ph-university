import FacultyDashboard from '../pages/faculty/FacultyDashboard';
import FacultyTest from '../pages/faculty/FacultyTest';


export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard/>,
  },
  {
    name: 'Faculty Management',
    children: [
      {
        name: 'Test Faculty',
        path: 'test-faculty',
        element: <FacultyTest/>
      },
    ],
  },
];

