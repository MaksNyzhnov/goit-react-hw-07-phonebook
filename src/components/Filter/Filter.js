import { useDispatch } from 'react-redux';

import css from './Filter.module.css';

const Filter = () => {
  const filter = 1;
  const dispatch = useDispatch();

  const onFilterChange = event => {};
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.section__input}
        type="text"
        placeholder="Enter name here"
        value={filter}
        onChange={onFilterChange}
      ></input>
    </>
  );
};

export default Filter;
