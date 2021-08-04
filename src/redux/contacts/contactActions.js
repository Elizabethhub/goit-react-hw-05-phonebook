// ====== toolkit =======
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const setFilter = createAction("contacts/setFilter");

//======= redux =========

// const ADD_CONTACT = "addContact";
// const DELETE_CONTACT_BY_ID = "deleteContact";
// const SET_FILTER = "setFilter";

// export { ADD_CONTACT, DELETE_CONTACT_BY_ID, SET_FILTER };

// export const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });
// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT_BY_ID,
//   payload: id,
// });
// export const setFilter = (value) => ({
//   type: SET_FILTER,
//   payload: value,
// });
