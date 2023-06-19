'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Button = () => {
  const router = useRouter();
  const [data, setData] = useState('1234');
  return (
    <button type="button" onClick={() => router.push(`/detail/${data}`)}>
      {data}
    </button>
  );
};

export default Button;
