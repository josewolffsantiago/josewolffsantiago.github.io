		//uma brincadeira que eu quis fazer para aprender a como colocar o parenteses e o - sozinho no campo telefone. Peguei como exemplo no site https://pt.stackoverflow.com/questions/51109/como-mascarar-um-input-no-html5
		function mascara(telefone){ 
            if(telefone.value.length == 0)
                telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
            if(telefone.value.length == 3)
                telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
 
            if(telefone.value.length == 10)  //peguei a logica e fiz algumas alterações, como espaço após o ) e o valor para colocar o traço, que estava incorreto.
                telefone.value = telefone.value + '-'; //quando o campo já tiver 10 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
  
}		
	