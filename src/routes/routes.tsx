import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
// import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",  // relative path
        element: <About />,
      },
      {
        path: "content",
        element: <Contact/>,
      },
    ],
  },
{
  path : "/login", //absolute path
  element : <Login/>
},
{
  path : "/register",
  element : <Register/>
},
{
  path: "/admin",
  element: <App />,
  children: [
    {
      index: true,
      // path: "dashboard",  // relative path
      element: <AdminDashboard />,
    },
    {
      // index: true,
      path: "dashboard",  // relative path
      element: <AdminDashboard />,
    },
    {
      // index : true,
      path: "create-student",
      element: <CreateStudent/>,
    },
    {
      path: "create-admin",
      element: <CreateAdmin/>,
    },
    {
      path: "create-faculty",
      element: <CreateFaculty/>,
    },
  ],
},

]);

export default router;
