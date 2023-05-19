import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ onModalClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27 || e.currentTarget === e.target) {
        return onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  return (
    <div onClick={onModalClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};
