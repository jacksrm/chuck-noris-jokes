async function piadaAleatoria(){
    try {
        const respostaAPI = await fetch('https://api.chucknorris.io/jokes/random')
        const dados = await respostaAPI.json()
        const piada = document.querySelector('.joke')
        piada.innerHTML = `${dados.value}`
        
    } catch (error) {
        alert('deu erro', error)
    }
}


async function piadaCategoria(){
    try {
        const categorias = document.querySelector('#categories')
        const indexCatSelecionada = categorias.selectedIndex;
        const respostaAPI = await fetch(`https://api.chucknorris.io/jokes/random?category=${categorias.options[indexCatSelecionada].value}`)
        const dados = await respostaAPI.json()
        const piada = document.querySelector('.joke')
        piada.innerHTML = `${dados.value}`

    } catch (error) {
        alert('deu erro', error)
    }
}

async function piadaQuery(){
    try {
        const texto = document.querySelector('#texto').value

        if (texto !== ''){
            const respostaAPI = await fetch(`https://api.chucknorris.io/jokes/search?query=${texto}`)
            const dados = await respostaAPI.json()
            const jokeIndex = Math.floor(Math.random() * (dados.total))
            const piada = document.querySelector('.joke')
            piada.innerHTML = `${dados.result[jokeIndex].value}`
        } else {
            const piada = document.querySelector('.joke')
            piada.innerHTML = piada.innerHTML
        }

    } catch (error) {
        alert('deu erro', error)
    }
}