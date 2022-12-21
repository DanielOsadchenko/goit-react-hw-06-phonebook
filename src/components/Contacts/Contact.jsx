import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebookSlice';

export const Contact = ({ name, number, id}) => {
  
  const dispatch = useDispatch();
  return <li ><span>{name}: {number}</span><button type='button' onClick={() => {dispatch(removeContact(id))}}>Delete</button></li>
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func
}