import { WHATSAPP_NUMBER } from '../config.js';
import { saveBooking } from '../storage/bookings.js';

export function initWhatsapp() {
  const form = document.getElementById('step2');
  const dateInput = form?.querySelector('input');
  const timeSelect = form?.querySelector('select');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const date = dateInput.value;
    const time = timeSelect.value;

    if (!date || !time) return;

    saveBooking(date, time);

    const message = encodeURIComponent(
      `Hola, quiero agendar una cita en GroomerSearch el ${date} a las ${time}.`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  });
}
