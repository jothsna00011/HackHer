import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { items, userDetails } = await req.json();
    
    // In a real app, you would:
    // 1. Validate the order
    // 2. Check medicine availability
    // 3. Process payment
    // 4. Save to database
    // 5. Send confirmation email

    const order = {
      id: Date.now(),
      items,
      userDetails,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}