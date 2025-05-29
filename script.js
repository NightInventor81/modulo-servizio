document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('submitBtn');

  btn.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    // Prendi qui gli altri campi analogamente

    // Controllo base
    if (!nome || !cognome) {
      alert('Per favore, compila nome e cognome.');
      return;
    }

    // Esempio di invio via fetch
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, cognome })
    })
    .then(res => {
      if (!res.ok) throw new Error('Errore nel server');
      return res.json();
    })
    .then(data => {
      console.log('Risposta server:', data);
      alert('Modulo inviato con successo!');
    })
    .catch(err => {
      console.error(err);
      alert('Si è verificato un errore durante l’invio.');
    });
  });
});

