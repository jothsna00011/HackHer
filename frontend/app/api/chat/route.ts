import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create chat context with correct format
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{
            text: "You are a helpful medical assistant. Provide general health information but remind users to consult healthcare professionals for specific medical advice."
          }]
        },
        {
          role: "model",
          parts: [{
            text: "I understand. I'll act as a medical assistant providing general health information while emphasizing the importance of consulting healthcare professionals for specific medical advice."
          }]
        }
      ]
    });

    // Generate response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    return NextResponse.json({
      response: response.text()
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to generate response'
    }, { 
      status: 500 
    });
  }
}