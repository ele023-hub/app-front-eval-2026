// Alert 1
  document.getElementById('sent').addEventListener('click', () => {
    Swal.fire({
      title: 'Message envoyé !',
      text: 'Merci de m\'avoir contacté. Je reviendrai vers toi très vite.',
      icon: 'success',
    });
  });

  // Alert 2
  document.getElementById('invalid').addEventListener('click', () => {
    Swal.fire({
      title: 'Formulaire invalide',
      text: 'Certains champs sont mal remplis. Vérifie ton adresse email.',
      icon: 'error',
      confirmButtonColor: '#e11d48',
    });
  });

  // Alert 3
  document.getElementById('deleted').addEventListener('click', () => {
    Swal.fire({
      title: 'Supprimer le projet ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      confirmButtonColor: '#e11d48',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById('delete-message').classList.remove('hidden');
      }
    });
  });