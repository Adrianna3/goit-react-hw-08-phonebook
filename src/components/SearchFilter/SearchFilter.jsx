import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contacts/contactsSlice';
import { Form } from 'react-bootstrap';

export const SearchFilter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFilter(filter));
  }, [filter, dispatch]);

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  return (
    <Form className="mb-1">
      <Form.Group>
        <Form.Label>Find contacts by Name</Form.Label>
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
