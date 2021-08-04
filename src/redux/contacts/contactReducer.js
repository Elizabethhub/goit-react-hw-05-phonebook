// ====== toolkit =======
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./contactActions";

const contactItemReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const contactReducer = combineReducers({
  contacts: contactItemReducer,
  filter: filterReducer,
});

export default contactReducer;
//======= redux =========
// import { combineReducers } from "redux";
// import { ADD_CONTACT, DELETE_CONTACT_BY_ID, SET_FILTER } from "./contactActions";

// const contactItemReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];

//     case DELETE_CONTACT_BY_ID:
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactReducer = combineReducers({
//   contacts: contactItemReducer,
//   filter: filterReducer,
// });

// export default contactReducer;
