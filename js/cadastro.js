const users=[
    {
        login: '1914Andre@gmail.com',
        pass: 'A19551947b'
    },

    {
        login: 'MonicaInchada',
        pass: '123456Senhaforte'
    },


    {
        login: 'EleonorProgramador',
        pass: 'MaquinaDeLavarBarata123'
    },

    {
        login: 'AldeaoRonaldo',
        pass: 'Mojang2012'
    },

    {
        login: 'JustinBebado',
        pass: 'S0rry'
    },

    {
        login: '',
        pass: ''
    },
]
const clicar = document.getElementById("btn")
clicar.addEventListener("click",()=>{
    
    let getEmail = document.getElementById("gmail").value
    let getPassword = document.getElementById("senha").value
    let validaLogin = false
    
    for (let i in users){
     if (getEmail ==users [i].login && getPassword == users [i].pass){
        validaLogin = true
        break
     }

    }
    if (validaLogin==true){
        alert("deu bom")
    }else{
        alert("deu ruim")
    }
})

