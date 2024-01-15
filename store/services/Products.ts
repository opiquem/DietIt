import { api } from '../api/api';

export interface Products {
  id: number;
  name: string;
  caloriesPerGram: number;
}

type ProductsResponse = Products[];

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductsResponse, void>({
      query: () => ({ url: 'products' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Products', id } as const)),
        { type: 'Products' as const, id: 'LIST' },
      ],
    }),
  })
});

export const {
  useGetProductsQuery
} = productsApi;

export const { endpoints: { getProducts }, } = productsApi;