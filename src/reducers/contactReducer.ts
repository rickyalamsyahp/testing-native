import { ContactAction, ContactState } from '../types';

const initialState: ContactState = [];

const contactReducer = (state = initialState, action: ContactAction): ContactState => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return action.payload;
    case 'CREATE_CONTACT':
      return [...state, action.payload];
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export default contactReducer;
