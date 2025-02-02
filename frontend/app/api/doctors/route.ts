import { NextResponse } from 'next/server';

// In a real app, this would be in a database
const doctors = [
  { 
    id: 1, 
    name: "Dr. Sarah Johnson", 
    specialty: "General Medicine", 
    distance: "0.5 km", 
    phone: "+1234567890",
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.8
  },
  // ... more doctors
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const specialty = searchParams.get('specialty');
  const maxDistance = searchParams.get('maxDistance');

  let filteredDoctors = [...doctors];

  if (specialty) {
    filteredDoctors = filteredDoctors.filter(doc => 
      doc.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
  }

  if (maxDistance) {
    filteredDoctors = filteredDoctors.filter(doc => 
      parseFloat(doc.distance) <= parseFloat(maxDistance)
    );
  }

  return NextResponse.json(filteredDoctors);
}