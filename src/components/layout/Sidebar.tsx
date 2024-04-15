import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { sidebarItemsGenerator } from "../../utlis/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.route";

const userRole = {
  ADMIN: "admin",
  FACULTY : "faculty",
  STUDENT : "student",
};

const Sidebar = () => {
  const role = "faculty";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
      case userRole.FACULTY:
        sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
        break;
      case userRole.STUDENT:
          sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
          break;  
  
    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        className=""
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH UNV</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
