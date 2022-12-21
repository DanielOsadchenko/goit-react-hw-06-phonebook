import { createSlice } from "@reduxjs/toolkit";

const phonebookInitialState = {
  contacts: [],
  filter: ""
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload)
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = `${action.payload.toLowerCase()}`
    },
  },
});

export const { addContact, removeContact, filterContact } = phonebookSlice.actions

export default phonebookSlice.reducer