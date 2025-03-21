import React from 'react';
import classes from './button-search.module.css';

interface Props {
  onclick: () => void;
}

export const ButtonSearch: React.FC<Props> = (props) => {
  const { onclick } = props;
  return (
    <button className={classes.buttonSearch} onClick={onclick}>
      Search
    </button>
  );
};
