async function teste(){
    const valor = await fetch('https://apisimulador.qualicorp.com.br/endereco/Enderecos/13480-460?api-key=92344d33-65ee-4a33-a3a2-a1fb7fcd65a7')
    .then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data)
      console.log(`O valor de ESTADO_SIGLA é: ${data['ESTADO_SIGLA']}`)
    }).catch(function(error){
      console.log(error.message)
    })
  }
    
  
  teste()