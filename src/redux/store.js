// ====== toolkit =======
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contacts/contactReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactReducer) },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// const store = configureStore({ reducer: contactReducer });

export default store;

//========= redux =======//

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactReducer from "./contacts/contactReducer";

// // const reducer = (state = {}, action) => state;

// const store = createStore(contactReducer, composeWithDevTools());

// export default store;
