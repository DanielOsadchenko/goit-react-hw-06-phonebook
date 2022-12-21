import { createSlice } from "@reduxjs/toolkit";

const phonebookInitialState = {
  contacts: [{
        id: '1',
        name: 'Rosie ',
        number: '9876434656879'
  },
    {
        id: '2',
        name: 'Simpson',
        number: '23454356879'
    },
  {
        id: '3',
        name: 'Rosie Simpson',
        number: '1234564356879'
      }],
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