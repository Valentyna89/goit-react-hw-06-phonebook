import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
        className={css.inputFilter}
      ></input>
    </label>
  );
};

export default Filter;
