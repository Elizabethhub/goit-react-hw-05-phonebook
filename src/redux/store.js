// ====== toolkit =======
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/contactReducer";

const store = configureStore({ reducer: contactReducer });

export default store;

//========= redux =======//

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactReducer from "./contacts/contactReducer";

// // const reducer = (state = {}, action) => state;

// const store = createStore(contactReducer, composeWithDevTools());

// export default store;
