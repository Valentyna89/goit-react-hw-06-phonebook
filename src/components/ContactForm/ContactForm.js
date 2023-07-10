import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { changeFilter } from '../../redux/filterSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;

    const isContactExists = contacts.find(contact => {
      return contact.name.toLowerCase() === name.value.toLowerCase();
    });

    if (isContactExists) {
      alert(`${name.value} is already in contacts!`);
      resetForm();
    } else {
      dispatch(addContact({ name: name.value, number: number.value }));
      dispatch(changeFilter(''));
      resetForm();
    }
  };

  const resetForm = () => {
    document.getElementById('contactForm').reset();
  };

  return (
    <form id="contactForm" className={css.contactsForm} onSubmit={handleSubmit}>
      <label className={css.contactData}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.inputData}
        />
      </label>
      <label className={css.contactData}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.inputData}
        />
      </label>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
  findContact: PropTypes.func,
};

export default ContactForm;
