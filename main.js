<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portfólio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="sobre">
        <h1>Sobre Mim</h1>
        <p>Sou um desenvolvedor apaixonado por tecnologia, focado em criar soluções inovadoras e eficientes. Tenho experiência em diversas tecnologias como HTML, CSS, JavaScript, React e Node.js.</p>
    </section>

    <section id="projetos">
        <h1>Meus Projetos</h1>
        <div class="projeto">
            <h2>Projeto 1: Site Responsivo</h2>
            <p>Desenvolvi um site totalmente responsivo, utilizando HTML5, CSS3 e JavaScript. O site se adapta a diferentes tamanhos de tela, proporcionando uma excelente experiência de usuário.</p>
        </div>
        <div class="projeto">
            <h2>Projeto 2: Aplicativo de Lista de Tarefas</h2>
            <p>Criei um aplicativo simples para gerenciar tarefas utilizando React. O app permite adicionar, editar e excluir tarefas com persistência local.</p>
        </div>
    </section>

    <section id="contato">
        <h1>Contato</h1>
        <form action="mailto:seuemail@dominio.com" method="get">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
2. Estilos CSS (styles.css)
css
Copiar código
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

section {
    padding: 40px 20px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
}

.projeto {
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    gap: 10px;
}

input, textarea {
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    background-color: #333;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
}

button:hover {
    background-color: #555;
}

footer {
    text-align: center;
    padding: 10px 0;
    background-color: #333;
    color: white;
}
