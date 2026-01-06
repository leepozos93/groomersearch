export function initSteps() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
  
    if (!step1 || !step2) return;
  
    step1.addEventListener('submit', e => {
      e.preventDefault();
      step1.style.display = 'none';
      step2.style.display = 'block';
    });
  }
  