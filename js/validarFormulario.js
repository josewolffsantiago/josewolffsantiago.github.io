function validarFormulario() {
		  var nome = document.getElementById("nome").value;
		  var email = document.getElementById("email").value;
		  var telefone = document.getElementById("telefone").value;
	
		  if (nome.length <= 2 || nome.length > 100) {
			alert("Digite um nome válido");
			return false;
		  }
	
		  if (email.length <= 10 || email.length > 100) {
			alert("O e-mail inserido é inválido");
			return false;
		  }
		  
		 
		  if (telefone.length !== 15) {
			alert("O telefone está inválido"); //o numero de caracteres tive que alterar para 15 pois o código conta o espaço, os parenteses () e o traço que coloquei
			return false;
		  }
	
		  return true;
		}
	
		