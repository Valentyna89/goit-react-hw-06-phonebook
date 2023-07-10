import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <div className={css.Container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
