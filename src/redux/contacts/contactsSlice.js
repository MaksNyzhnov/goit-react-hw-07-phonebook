import { createSlice } from '@reduxjs/toolkit';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({
        name: action.payload.name,
        number: action.payload.number,
        id: action.payload.id,
      });
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
