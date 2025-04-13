// Função para detectar quando os cards aparecem na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  // Aplica o observer nos cards
  const cards = document.querySelectorAll('.projeto-card');
  cards.forEach(card => observer.observe(card));
  
  const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // evita recarregar a página

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode futuramente enviar pro backend ou e-mail real
  mensagemSucesso.style.display = 'block';

  // Limpar o formulário
  form.reset();

  // Esconde a mensagem depois de alguns segundos
  setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 4000);
});
