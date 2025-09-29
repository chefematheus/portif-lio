document.addEventListener("DOMContentLoaded", function() {
    const detalhesBtns = document.querySelectorAll('.detalhes-btn');
    
    detalhesBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Detalhes do projeto serão exibidos em breve!');
        });
    });

    const formContato = document.getElementById('form-contato');
    formContato.addEventListener('submit', function(event) 
        event.preventDefault()  const nome = document.getElementById('nome').value  const email = document.getElementById('email').value;   const mensagem = document.getElementById('mensagem').value);

        if(nome && email && mensagem) {
            alert(`Mensagem enviada por: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
            formContato.reset();
        } else {
            alert('Preencha todos os campos.');
        }
    });
});
