import React, { useState } from 'react';
import { Bike } from 'lucide-react';
import BikeCard from './components/BikeCard';
import RentalModal from './components/RentalModal';

const BIKES = [
  {
    id: '1',
    name: 'Mountain Explorer',
    type: 'Mountain Bike',
    location: 'Downtown Station',
    pricePerHour: 15,
    imageUrl: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=2048',
    available: true,
  },
  {
    id: '2',
    name: 'City Cruiser',
    type: 'Urban Bike',
    location: 'Central Park',
    pricePerHour: 12,
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=2048',
    available: true,
  },
  {
    id: '3',
    name: 'Road Master',
    type: 'Road Bike',
    location: 'West Side Hub',
    pricePerHour: 18,
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=2048',
    available: true,
  },
];

function App() {
  const [bikes, setBikes] = useState(BIKES);
  const [selectedBike, setSelectedBike] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRentClick = (id) => {
    const bike = bikes.find((b) => b.id === id);
    if (bike && bike.available) {
      setSelectedBike(bike);
      setShowModal(true);
    }
  };

  const handleRentalConfirm = (hours) => {
    if (selectedBike) {
      setBikes(
        bikes.map((bike) =>
          bike.id === selectedBike.id ? { ...bike, available: false } : bike
        )
      );
      setShowModal(false);
      alert(`Successfully rented ${selectedBike.name} for ${hours} hours!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Bike className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Bike Rentals</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              {...bike}
              onRent={handleRentClick}
            />
          ))}
        </div>

        {showModal && (
          <RentalModal
            bike={selectedBike}
            onClose={() => setShowModal(false)}
            onConfirm={handleRentalConfirm}
          />
        )}
      </main>
    </div>
  );
}

export default App;