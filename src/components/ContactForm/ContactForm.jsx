import styles from './ContactForm.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    

    if (contacts.find(cont => cont.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

   const { form, label, input, addBtn } = styles;

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={label}>
        Number
        <input
          className={input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
