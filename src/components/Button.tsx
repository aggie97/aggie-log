'use client';

import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/detail')}>
      등록 하러가기
    </button>
  );
};

export default Button;
