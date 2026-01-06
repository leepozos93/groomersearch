import { initSteps } from './ui/steps.js';
import { initCalendar } from './ui/calendar.js';
import { initWhatsapp } from './ui/whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
  initSteps();
  initCalendar();
  initWhatsapp();
});
