import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53640533-1ad844143519c7c1e76be4a36';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params }).then(res => res.data);
}
