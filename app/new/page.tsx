'use client';
import axios from 'axios';
import { type MouseEvent, useState } from 'react';

async function registerPost(data: { title: string; content: string }) {
  const res = await axios.post('http://localhost:3000/api/posts/new', data);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.status) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('게시글을 생성하는 데에 실패했습니다.');
  }

  return res.data;
}

const NewBoard = () => {
  const [formValue, setFormValue] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
  });
  const onSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await registerPost({ ...formValue });
      setFormValue({ title: '', content: '' });
    } catch (e) {}
  };

  return (
    <section>
      <form>
        <label>
          <input
            value={formValue.title}
            onChange={(e) => setFormValue({ ...formValue, title: e.target.value })}
            type="text"
            placeholder="제목"
          />
        </label>
        <label>
          <textarea
            value={formValue.content}
            onChange={(e) => setFormValue({ ...formValue, content: e.target.value })}
            placeholder="내용"
          ></textarea>
        </label>
        <button type="button" onClick={onSubmit}>
          등록하기
        </button>
      </form>
    </section>
  );
};
export default NewBoard;
