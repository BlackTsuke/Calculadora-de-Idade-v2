const input = document.querySelector('#date')
const paragrafo = document.querySelector('.resultado')
input.addEventListener('change', () => {
  const nascimento = new Date(input.value)
  const anoNascimento = nascimento.getFullYear()
  const mesNascimento = nascimento.getMonth()
  const diaNascimento = nascimento.getDate()

  const atual = new Date()
  const anoAtual = atual.getFullYear()
  const mesAtual = atual.getMonth()
  const diaAtual = atual.getDate()

  let idade = anoAtual - anoNascimento

  if (mesAtual < mesNascimento) {
    --idade
  } else if (mesAtual == mesNascimento) {
    if (diaAtual < diaNascimento) {
      --idade
    }
  }
  paragrafo.textContent = `Sua idade é : ${idade}`
})