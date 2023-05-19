import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchHitsByQuery } from 'serv/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setQuery(event.target.search.value);
    setIsLoading(true);
    setImages([]);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  const onNextPage = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!query) return;

    const fetchGallery = async query => {
      try {
        const response = await fetchHitsByQuery(query, page);
        setImages(prevState => [...prevState, ...response]);
        if (response.length < 12) {
          setShowBtn(false);
        }
        if (response.length === 12) {
          setShowBtn(true);
        }
        if (response.length === 0) {
          Notify.failure('No matches found!');
        }
      } catch (error) {
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery(query, page);
  }, [page, query]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onClickImage={onClickImage} />
      {isLoading && <Loader />}
      {showBtn && <Button onNextPage={onNextPage} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
      )}
    </div>
  );
};
