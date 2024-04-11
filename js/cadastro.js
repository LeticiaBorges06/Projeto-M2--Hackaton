const users=[
    {
        login: '1914Andre@gmail.com',
        pass: 'A19551947b'
    },

    {
        login: 'MonicaInchada@gmail.com.br',
        pass: '123456Senhaforte'
    },


    {
        login: 'EleonorProgramador@gmail.com',
        pass: 'MaquinaDeLavarBarata123'
    },

    {
        login: 'AldeaoRonaldo@hotmail.com',
        pass: 'Mojang2012'
    },

    {
        login: 'JustinBebado@gmail.com',
        pass: 'S0rry'
    }

   ]
const clicar = document.getElementById("btn")
clicar.addEventListener("click",()=>{
    
    let getEmail = document.getElementById("gmail").value
    let getPassword = document.getElementById("password").value
    let validaLogin = false
    
    for (let i in users){
     if (getEmail ===users[i].login && getPassword === users[i].pass){
        validaLogin = true
        break
     }

    }
    window.location ="pages/Quarta pagina/pagina.html"

    if (validaLogin===true){
        alert("Usuario aceito,sucesso!")
    }else{
        alert("Usuario ou senha invalidos")
    }
})



