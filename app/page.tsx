import Button from '@/components/Button';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('게시글 목록을 불러오는 데에 실패했습니다.');
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <main>Blog List Page</main>
      <h1>{posts}</h1>
      <Button />
    </>
  );
}
