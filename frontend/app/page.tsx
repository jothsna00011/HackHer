"use client";
import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Pill, User, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [activeTab, setActiveTab] = useState("chat");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // New state for doctors and medicines
  const [doctors, setDoctors] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch doctors and medicines when component mounts
  useEffect(() => {
    fetchDoctors();
    fetchMedicines();
  }, []);

  // Chat handling
  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setLoading(true);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: inputMessage })
        });
        
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        
        const data = await response.json();
        setChatMessages([
          ...chatMessages,
          { type: 'user', content: inputMessage },
          { type: 'ai', content: data.response }
        ]);
        setInputMessage("");
      } catch (err) {
        setError("Failed to send message");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Fetch doctors
  const fetchDoctors = async (specialty = '', maxDistance = '') => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (specialty) params.append('specialty', specialty);
      if (maxDistance) params.append('maxDistance', maxDistance);
      
      const response = await fetch(`/api/doctors?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      
      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError("Failed to fetch doctors");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch medicines
  const fetchMedicines = async (search = '', category = '') => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (category) params.append('category', category);
      
      const response = await fetch(`/api/medicines?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch medicines');
      }
      
      const data = await response.json();
      setMedicines(data);
    } catch (err) {
      setError("Failed to fetch medicines");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Emergency call
  const handleEmergencyCall = async () => {
    try {
      const response = await fetch('/api/emergency', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: { lat: 0, lng: 0 }, // In real app, get actual location
          emergency_type: 'medical'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to contact emergency services');
      }
      
      const data = await response.json();
      alert("Emergency services have been notified");
    } catch (err) {
      setError("Failed to contact emergency services");
      console.error(err);
    }
  };

  // Add to cart
  const handleAddToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  // Place order
  const placeOrder = async () => {
    if (cart.length === 0) return;
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          userDetails: {
            // Add user details here
          }
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      
      const data = await response.json();
      setCart([]); // Clear cart after successful order
      alert('Order placed successfully!');
    } catch (err) {
      setError("Failed to place order");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
          <Button 
            variant="link" 
            className="ml-2" 
            onClick={() => setError(null)}
          >
            Dismiss
          </Button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column - Navigation */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button 
                  variant={activeTab === "chat" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("chat")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Health Chat
                </Button>
                <Button 
                  variant={activeTab === "doctors" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("doctors")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Nearby Doctors
                </Button>
                <Button 
                  variant={activeTab === "medicines" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("medicines")}
                >
                  <Pill className="mr-2 h-4 w-4" />
                  Buy Medicines {cart.length > 0 && `(${cart.length})`}
                </Button>
                <Button 
                  variant="destructive"
                  className="w-full justify-start"
                  onClick={handleEmergencyCall}
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Emergency Call
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                {activeTab === "chat" && "AI Health Assistant"}
                {activeTab === "doctors" && "Nearby Healthcare Providers"}
                {activeTab === "medicines" && "Medicine Store"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {loading && (
                <div className="text-center py-4">Loading...</div>
              )}

              {activeTab === "chat" && (
                <div className="space-y-4">
                  <div className="h-96 overflow-y-auto border rounded p-4 space-y-4">
                    {chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your health question..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      disabled={loading}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={loading}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "doctors" && (
                <div className="space-y-4">
                  {doctors.map(doctor => (
                    <Card key={doctor.id}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                          <p className="text-sm text-gray-500">{doctor.distance} away</p>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => alert(`Calling ${doctor.name}...`)}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === "medicines" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {medicines.map(medicine => (
                      <Card key={medicine.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{medicine.name}</h3>
                              <p className="text-sm text-gray-500">${medicine.price}</p>
                            </div>
                            <Button 
                              variant="outline"
                              onClick={() => handleAddToCart(medicine)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {cart.length > 0 && (
                    <div className="mt-4 p-4 border-t">
                      <h3 className="font-medium mb-2">Cart ({cart.length} items)</h3>
                      <div className="flex justify-between items-center">
                        <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
                        <Button onClick={placeOrder}>Place Order</Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}