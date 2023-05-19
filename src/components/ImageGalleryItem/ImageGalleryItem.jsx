import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          onClick={() => onClickImage(largeImageURL)}
          src={webformatURL}
          alt={tags}
          largeimage={largeImageURL}
          className={css.ImageGalleryItem__image}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
