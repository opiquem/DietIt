import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/',
  // prepareHeaders: (headers, { getState }) => {
  //   // By default, if we have a token in the store, let's use that for authenticated requests
  //   const token = (getState() as RootState).auth.token;
  //   if (token) {
  //     headers.set('authentication', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  tagTypes: ['Products'],

  endpoints: () => ({}),
});