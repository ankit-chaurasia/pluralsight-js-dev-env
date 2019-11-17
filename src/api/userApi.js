import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

const onSuccess = (response) => {
  return response.json();
};

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
};

const get = (url) => {
  return fetch(`${baseUrl}${url}`).then(onSuccess, onError);
};

export const getUsers = () => {
  return get('users');
};

const del = (url) => {
  const request = new Request(`${baseUrl}${url}`, {
    method: 'DELETE',
  });
  return fetch(request).then(onSuccess, onError);
};

export const deleteUser = (id) => {
  return del(`users/${id}`);
};
