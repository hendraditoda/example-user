import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Space, Spin, Table, Tag, Input, Form } from 'antd';
import { UserAppContext } from '../Context/UserAppContext';

const Home = () => {
  let history = useHistory();
  const { functions, dataUser, setDataUser, fetchStatus, setFetchStatus } =
    useContext(UserAppContext);
  const { functionDelete, functionEdit, getDataUser } = functions;

  useEffect(() => {
    if (fetchStatus) {
      getDataUser();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  //   const handleText = (text, max) => {
  //     if (text === undefined) {
  //       return '';
  //     } else {
  //       return text.slice(0, max) + '...';
  //     }
  //   };

  //   const handleEdit = (e) => {
  //     let idMobile = parseInt(e.target.value);
  //     history.push(`/mobile-form/edit/${idMobile}`);
  //     functionEdit(idMobile);
  //   };

  //   const handleDelete = (e) => {
  //     let idMobile = parseInt(e.target.value);
  //     functionDelete(idMobile);
  //   };

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Name',
      dataIndex: 'first',
      key: 'first',
      //   ellipsis: true,
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.genre.localeCompare(b.genre),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      //   ellipsis: true,
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.genre.localeCompare(b.genre),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'Registered',
      dataIndex: 'registered',
      key: 'registered',
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.registered - b.registered,
    },
  ];

  const data = dataUser;
  // console.log(data);

  return (
    <>
      <div>
        <Table
          //   className="table-tugas15"
          rowKey="id"
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default Home;
