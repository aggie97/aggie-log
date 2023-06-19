import { NextResponse } from 'next/server';

export async function GET() {
  // DB에서 가져와서 던져주기
  return NextResponse.json('게시글 목록 데이터 조회');
}
