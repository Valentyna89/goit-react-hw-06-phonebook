import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
        className={css.inputFilter}
      ></input>
    </label>
  );
};
export default Filter;
