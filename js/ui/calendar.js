import { TIME_SLOTS } from '../config.js';
import { isBooked } from '../storage/bookings.js';

export function initCalendar() {
  const dateInput = document.querySelector('#step2 input[type=\"date\"]');
  const timeSelect = document.querySelector('#step2 select');

  if (!dateInput || !timeSelect) return;

  // Cargar horarios base
  TIME_SLOTS.forEach(time => {
    const option = document.createElement('option');
    option.textContent = time;
    option.value = time;
    timeSelect.appendChild(option);
  });

  dateInput.addEventListener('change', () => {
    const date = dateInput.value;

    [...timeSelect.options].forEach(opt => {
      if (!opt.value) return;
      opt.disabled = isBooked(date, opt.value);
    });
  });
}
