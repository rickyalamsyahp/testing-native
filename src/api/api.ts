import axios from 'axios';

const API_URL = 'https://contact.herokuapp.com/contact';

export const getContacts = () => {
  return axios.get(API_URL);
};

export const addContact = (contact: Contact) => {
  return axios.post(API_URL, contact);
};

export const deleteContact = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};
