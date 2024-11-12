import React from 'react';
import { Clock, MapPin, Bike } from 'lucide-react';

export default function BikeCard({
  id,
  name,
  type,
  location,
  pricePerHour,
  imageUrl,
  available,
  onRent,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-4 py-2 bg-red-500 rounded-md">
              Currently Rented
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Bike className="w-4 h-4" />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>${pricePerHour}/hour</span>
        </div>
        <button
          onClick={() => onRent(id)}
          disabled={!available}
          className={`mt-4 w-full py-2 px-4 rounded-md font-semibold transition-colors
            ${
              available
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          {available ? 'Rent Now' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
}