'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AuthPage() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber((lastNumber) => lastNumber + 1);
  };
  return (
    <div>
      <button onClick={increase}>Click</button>
      <p>{number}</p>
      <Link href={'/'}>Home</Link>
    </div>
  );
}
