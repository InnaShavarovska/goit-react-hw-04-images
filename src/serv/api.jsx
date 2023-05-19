import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34851950-1466f977010869c95ad46e51d';

export const fetchHitsByQuery = async (query, page) => {
  const response = await axios.get(`${BASE_URL}`, {
    method: 'get',
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};
