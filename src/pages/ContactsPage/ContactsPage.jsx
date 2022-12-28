import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import styles from './ContactsPage.module.css';
import { Section } from '../../components/section/Section';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { wrapper } = styles;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={wrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        {isLoading && <p>'Loading'</p>}
        <ContactList />
      </Section>
    </div>
  );
}


export default ContactsPage;
