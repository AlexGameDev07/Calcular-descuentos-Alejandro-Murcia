
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const questions = document.querySelectorAll('.question');

    // Cambiar tema
    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Tema Claro';
        } else {
            themeToggle.textContent = 'Tema Oscuro';
        }
    });

    // Animar preguntas al hacer clic
    questions.forEach(question => {
        question.addEventListener('click', function () {
            // Animar la pregunta
            this.style.transform = 'scale(1.03)';
            setTimeout(() => {
                this.style.transform = 'translateX(5px)';
            }, 300);

            // Aleatoriamente cambiar el color del borde al hacer clic
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.borderLeftColor = randomColor;
        });
    });
});
