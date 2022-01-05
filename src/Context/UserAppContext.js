import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';

export const UserAppContext = createContext();

export const UserAppProvider = (props) => {
  const [dataUser, setDataUser] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  // const getDataUser = async () => {
  //   let result = await axios.get(
  //     `https://randomuser.me/api/?results=20&inc=username,email,gender`
  //   );
  //   let fetchResult = result.data;
  //   setDataUser(
  //     fetchResult.map((res) => {
  //       let { id, username, name, email, gender, registered } = res;

  //       return {
  //         id,
  //         username,
  //         name,
  //         email,
  //         gender,
  //         registered,
  //       };
  //     })
  //   );
  // };

  // const getDataUser = async () => {
  //   try {
  //     const url = `https://randomuser.me/api/1.3/?results=20`;
  //     const result = await axios.get(url);
  //     // const resultData = result.data;
  //     // console.log(resultData);

  //     setDataUser(
  //       result.data.map((row) => ({
  //         Username: row.username,
  //         Email: row.email,
  //       }))
  //     );
  //     console.log(dataUser);
  //     // isLoadingSet(false);
  //     return result.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getDataUser = async () => {
    try {
      const result = await axios.get(
        `https://randomuser.me/api/1.3/?results=20`
      );
      // const resultData = result.data;

      let resultData = result.data.results.map((e, index) => {
        let { id, username, name, email, gender, registered } = e;

        // let role =
        //   singlePlayer === 1
        //     ? multiplayer === 1
        //       ? 'single player & multi player'
        //       : 'single player'
        //     : multiplayer === 1
        //     ? 'multiplayer'
        //     : '';

        // const re = /\s*(?:,|$)\s*/;
        // let platformList = platform.split(', ');
        console.log(resultData);

        return {
          id,
          username,
          name,
          email,
          gender,
          registered,
        };
      });

      setDataUser([...resultData]);
      // isLoadingSet(false);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const functions = {
    // functionDelete,
    // functionEdit,
    getDataUser,
    // handleChange,
    // functionSubmit,
    // functionUpdate,
  };

  return (
    <UserAppContext.Provider
      value={{
        functions,
        dataUser,
        setDataUser,
        fetchStatus,
        setFetchStatus,
        // currentId,
        // setCurrentId,
        // input,
        // setInput,
        // searchStatus,
        // setSearchStatus,
      }}
    >
      {props.children}
    </UserAppContext.Provider>
  );
};
