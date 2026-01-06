import { STORAGE_KEY } from '../config.js';

export function getBookings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveBooking(date, time) {
  const bookings = getBookings();
  bookings[date] = bookings[date] || [];

  if (!bookings[date].includes(time)) {
    bookings[date].push(time);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function isBooked(date, time) {
  const bookings = getBookings();
  return bookings[date]?.includes(time);
}
