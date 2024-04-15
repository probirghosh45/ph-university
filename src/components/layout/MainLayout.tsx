import {Layout} from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import { adminPaths, adminSidebarItems } from "../../routes/admin.routes";
// import { sidebarItemsGenerator } from "../../utlis/sidebarItemsGenerator";
const { Content, Footer, Header } = Layout;
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import React from "react";

const MainLayout = () => {

// const items : MenuProps['items'] = [
//     {
//       key : 'dashboard',
//       label : <NavLink to="/admin/dashboard">Dashboard</NavLink>
//     },
//     {
//         key : 'profile',
//         label : "Profile"
//       },
//       {
//         key : 'User Management',
//         label : "User Management",
//         children : [
//           {
//             key : "Create Admin",
//             label : <NavLink to="/admin/create-admin">Create Admin</NavLink>
//         },
//         {
//             key : "Create Student",
//             label : <NavLink to="/admin/create-student">Create Student</NavLink>
//         },
//         {
//           key : "Create Faculty",
//           label : <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//         },
//       // {
//       //     key : "Create Student",
//       //     label : "Create Student"
//       // },
//   ]
//       }  
  
// ]



  return (
    <>
      <Layout style={{height : "100vh"}}>
        {/* <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="" style={{color : "white" , textAlign : "center" , height : "4rem" , display : "flex" , justifyContent : 'center' , alignItems : 'center'}}>
            <h1>PH UNV</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItemsGenerator(adminPaths, "admin")}
          />
        </Sider> */}
        <Sidebar/>
        <Layout>
          <Header style={{ padding: 0}} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
            <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
