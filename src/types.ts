export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export type ContactState = Contact[];

export interface FetchContactsAction {
  type: 'FETCH_CONTACTS';
  payload: Contact[];
}

export interface CreateContactAction {
  type: 'CREATE_CONTACT';
  payload: Contact;
}

export interface RemoveContactAction {
  type: 'REMOVE_CONTACT';
  payload: string;
}

export type ContactAction =
  | FetchContactsAction
  | CreateContactAction
  | RemoveContactAction;
