import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ onNextPage }) => {
  return (
    <button type="button" onClick={onNextPage} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func,
};
