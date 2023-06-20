import {Dispatch} from 'redux';
import axios from 'axios';
import {Contact, ContactAction} from '../types';

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      const response = await axios.get('https://contact.herokuapp.com/contact');
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: response.data.data,
      });
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
};

export const createContact = (contact: Contact) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      const response = await axios.post(
        'https://contact.herokuapp.com/contact',
        contact,
      );
      dispatch({
        type: 'CREATE_CONTACT',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };
};

export const removeContact = (id: string) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      await axios.delete(`https://contact.herokuapp.com/contact/${id}`);
      dispatch({
        type: 'REMOVE_CONTACT',
        payload: id,
      });
    } catch (error) {
      console.error('Error removing contact:', error);
    }
  };
};
