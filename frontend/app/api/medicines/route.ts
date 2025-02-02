import { NextResponse } from 'next/server';

const medicines = [
  { 
    id: 1, 
    name: "Paracetamol", 
    price: 5.99, 
    stock: true,
    description: "Pain reliever and fever reducer",
    category: "Over-the-counter",
    requires_prescription: false
  },
  // ... more medicines
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  let filteredMedicines = [...medicines];

  if (search) {
    filteredMedicines = filteredMedicines.filter(med => 
      med.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filteredMedicines = filteredMedicines.filter(med => 
      med.category === category
    );
  }

  return NextResponse.json(filteredMedicines);
}