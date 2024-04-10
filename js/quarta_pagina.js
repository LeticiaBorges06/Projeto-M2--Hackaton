document.addEventListener('DOMContentLoaded', function () {
    const testimonialForm = document.getElementById('testimonial-form');
    const testimonialsContainer = document.getElementById('testimonials-container');

    // Carrega depoimentos do localStorage quando a página é carregada
    loadTestimonials();

    // Evento de envio do formulário de depoimento
    testimonialForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtem inputs (dados) do formulário
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const addiction = document.getElementById('addiction').value;
        const testimonial = document.getElementById('testimonial').value;

        // Validar se todos os campos foram preenchidos
        if (name && age && addiction && testimonial) {
            // Cria o objeto com os dados do depoimento
            const newTestimonial = {
                name: name,
                age: age,
                addiction: addiction,
                testimonial: testimonial
            };

            // Salva o depoimento no localStorage
            saveTestimonial(newTestimonial);

            // Limpa o formulário quando o evento acontece
            testimonialForm.reset();

            // Atualiza a exibição da listaa  dos depoimentos
            loadTestimonials();
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });

    // salva o depoimento no localStorage
    function saveTestimonial(testimonial) {
        let testimonials = [];
        if (localStorage.getItem('testimonials')) {
            testimonials = JSON.parse(localStorage.getItem('testimonials'));
        }
        testimonials.push(testimonial);
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    // Função para carregar e exibir os depoimentos do localStorage
    function loadTestimonials() {
        testimonialsContainer.innerHTML = '';
        if (localStorage.getItem('testimonials')) {
            const testimonials = JSON.parse(localStorage.getItem('testimonials'));
            testimonials.forEach(function (testimonial, index) {
                const testimonialDiv = document.createElement('div');
                testimonialDiv.classList.add('testimonial');
                testimonialDiv.innerHTML = `
                    <h3>${testimonial.name}, ${testimonial.age} anos</h3>
                    <p><strong>Tipo de Vício:</strong> ${testimonial.addiction}</p>
                    <p>${testimonial.testimonial}</p>
                `;
                testimonialsContainer.appendChild(testimonialDiv);
            });
        }
    }
});
