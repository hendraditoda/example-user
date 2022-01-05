import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Nav = () => {
  let history = useHistory();

  return (
    <>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" style={{ position: 'absolute', left: '200px' }}>
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default Nav;
