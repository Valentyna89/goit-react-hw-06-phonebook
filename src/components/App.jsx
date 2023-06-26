import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ number, name }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const findContact = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    if (findContact) {
      alert(findContact.name + ' is already in contacts.');
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const findContact = name => {
    return contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleFilters = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleFilters = getVisibleFilters();

  return (
    <div className={css.Container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} findContact={findContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleFilters} onDelete={deleteContact} />
    </div>
  );
};

export default App;
