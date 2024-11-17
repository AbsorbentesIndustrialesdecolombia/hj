function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
  
    // Mostrar la sección correspondiente
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  }
  
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
     
        let productUrl = this.getAttribute('data-url');
        redirectToPurchase(productUrl);
    });
});