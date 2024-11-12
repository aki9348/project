import React from 'react';
import { X } from 'lucide-react';

export default function RentalModal({ bike, onClose, onConfirm }) {
  const [hours, setHours] = React.useState(1);

  if (!bike) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rent {bike.name}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rental Duration (hours)
            </label>
            <input
              type="number"
              min="1"
              max="24"
              value={hours}
              onChange={(e) => setHours(Math.max(1, Math.min(24, parseInt(e.target.value))))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between text-sm">
              <span>Price per hour:</span>
              <span>${bike.pricePerHour.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Total:</span>
              <span>${(bike.pricePerHour * hours).toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => onConfirm(hours)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Confirm Rental
          </button>
        </div>
      </div>
    </div>
  );
}