import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Handle GET request
  return NextResponse.json({ message: 'GET request received' });
}
