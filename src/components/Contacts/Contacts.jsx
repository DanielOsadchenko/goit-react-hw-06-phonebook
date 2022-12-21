import React from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter)
  )

  return  <ul>
            {visibleContacts.map(contact => {
              return <Contact
                name = {contact.name}
                number = { contact.number}
                id = {contact.id}
                key={contact.id}
              ></Contact>
            })}
          </ul>
}
Contacts.propTypes = {
  visibleContacts: PropTypes.array,
  handleDelete: PropTypes.func,
}