import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactsList}>
      {filterContacts.map(({ name, number, id }) => (
        <li className={css.contactsItem} key={id}>
          <p className={css.contactName}>{name + ': ' + number}</p>
          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
