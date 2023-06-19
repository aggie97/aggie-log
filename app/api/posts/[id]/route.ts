import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // 게시글 상세 데이터
  const postId = params.id;
  return NextResponse.json(`${postId}번 게시글 상세 조회`);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  // 게시글 수정 로직
  const postId = params.id;
  return NextResponse.json(`${postId}번 게시글 수정`, {
    status: 200,
  });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  // 게시글 삭제 로직
  const postId = params.id;
  return NextResponse.json(`${postId}번 게시글 삭제`, {
    status: 200,
  });
}
