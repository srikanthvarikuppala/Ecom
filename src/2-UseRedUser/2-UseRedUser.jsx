import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_UPDATE':
      return {
        ...state,
        userData: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'DELETE_USER':
      const newUser = state.userData.filter((eachUser) => eachUser.id !== action.payload);
      return {
        ...state,
        userData: newUser
      };
    case 'EDIT_USER':
      return {
        ...state,
        editUser: action.payload
      };
    default:
      return state;
  }
};

const UseRedUser = () => {
  const fetchUserData = async (URL) => {
    dispatch({ type: 'LOADING', payload: true });
    dispatch({ type: 'ERROR', payload: { state: false, msg: '' } });

    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({ type: 'USER_UPDATE', payload: data.users });
      dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOADING', payload: false });
      dispatch({ type: 'ERROR', payload: { state: true, msg: error.message } });
    }
  };

  useEffect(() => {
    fetchUserData("https://dummyjson.com/users");
  }, []);

  const initialState = {
    userData: [],
    isLoading: false,
    isError: { state: false, msg: "" },
    editUser: null, // To store the user data being edited
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handelDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleEdit = (user) => {
    dispatch({ type: "EDIT_USER", payload: user });
  };

  const handelSubmitEdit = (event) => {
    event.preventDefault();

    const updatedUser = {
      id: state.editUser.id,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      university: event.target.university.value,
    };
    dispatch({ type: "EDIT_USER", payload: updatedUser });

    // Clear the editUser state after the edit is done
    dispatch({ type: "EDIT_USER", payload: null });
  };

  return (
    <div>
      {state.isLoading ? (
        <div>
          <h1>LOADING.....</h1>
        </div>
      ) : (
        <div>
          <h2>USER INFORMATION</h2>
          {state.userData.map((eachUser) => {
            const { id, firstName, lastName, university } = eachUser;
            return (
              <div key={id} style={{ listStyle: 'none' }}>
                <li>
                  <div>Full Name:- {`${firstName} ${lastName}`}</div>
                  <div>University:- {university}</div>
                </li>
                <button onClick={() => handelDelete(id)}>DELETE</button>
                <button onClick={() => handleEdit(eachUser)}>EDIT</button>
              </div>
            );
          })}

          {/* Form for editing user data */}
          {state.editUser && (
            <form onSubmit={handelSubmitEdit}>
              <input type="text" placeholder="<NAME>" value={state.editUser.firstName} onChange={() => {}} />
              <br/>
              <input type="text" placeholder="Last name" value={state.editUser.lastName} onChange={() => {}} />
              <br/>
              <input type="email" placeholder="Email" value={state.editUser.university} onChange={() => {}} />
              <button type="submit">Save</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default UseRedUser;
