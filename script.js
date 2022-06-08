function siteAusente(){
  alert("O SITE ESTÁ EM CONSTRUÇÃO")
}

function login() {
  
  usuario = prompt("Digite o usuário:")
  
  if (!usuario){
    alert("Usuário incorreto!")
  } else {
    senha = prompt("Digite a senha:")
  } if(!senha){
    alert("Senha incorreta!")
  } else {
    alert("ESSA CONTA NÃO EXISTE")
  }
}
