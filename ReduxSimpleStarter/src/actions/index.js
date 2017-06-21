import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=68as7df6asdfs';

export function FETCH_POSTS() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}
