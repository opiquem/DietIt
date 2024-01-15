'use client';

import { useEffect, useState } from 'react';
import { products } from '../page';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<{id: number, name: string, calories: number} | undefined>({id: 0, name: '', calories: 0});

  useEffect(() => {
    if (params.id) {
      setProduct(products.find((product) => product.id === Number(params.id)));
    }
  }, []);

  return(
    <>
      <p>{product?.id}</p>
      <p>{product?.name}</p>
      <p>{product?.calories}</p>
    </>
  )
}
