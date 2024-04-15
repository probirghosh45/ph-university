import StudentDashboard from '../pages/student/StudentDashboard';
import StudentTest from '../pages/student/StudentTest';


export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard/>,
  },
  {
    name: 'Student Management',
    children: [
      {
        name: 'Test Student',
        path: 'test-student',
        element: <StudentTest/>
      },
    ],
  },
];

