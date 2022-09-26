import React from 'react';
import Nav from '../Component/Nav';
import '../css/Layout.css';
import { Breadcrumb, Layout, Menu } from 'antd';
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const LayoutComponent = (props) => {
  let years = new Date().getFullYear();

  return (
    <>
      <Layout>
        <Nav />
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Content className="site-layout-background">
              {props.content}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{years} Created by Hendradito
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
