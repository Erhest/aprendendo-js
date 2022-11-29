
const usuario = new Array()
const p = document.getElementById('msg')


function adicionarUser(e){
    e.preventDefault()
    p.innerText = ''
    const login = document.getElementById('loginBox')
    const user = document.getElementsByName('login')[0].value
    const senha = document.getElementsByName('senha')[0].value
    if(user.trim() == 'Kenji' && senha == 123){
        usuario.push(user)
        p.innerText = 'Você está LOGADO'
        if(login.style.display === 'none'){ 
            login.style.display = 'block'
        }else{
            login.style.display = 'none'
        }
    }else{
        p.innerText = 'USUÁRIO e/ou SENHA estão incorretos'
    }
    document.getElementsByName('login')[0].value = ''
    document.getElementsByName('senha')[0].value = ''
    document.getElementsByName('login')[0].focus()
}

