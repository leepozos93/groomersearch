import { saveBooking, getBookings } from './storage/bookings.js';

const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');
const list = document.getElementById('list');

function render() {
  const bookings = getBookings();
  list.innerHTML = '';

  Object.keys(bookings).forEach(date => {
    bookings[date].forEach(time => {
      const li = document.createElement('li');
      li.textContent = `${date} - ${time}`;
      list.appendChild(li);
    });
  });
}

window.block = function () {
  if (!dateInput.value) return;
  saveBooking(dateInput.value, timeSelect.value);
  render();
};

render();
