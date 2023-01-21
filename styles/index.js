Array.from(document.querySelectorAll(".escolha")).forEach(option => {
    option.addEventListener('click', function(){
        if(document.querySelectorAll(".planeta#select").length > 0){
            document.querySelector(".planeta#select").id = ''
        }
        document.querySelector(`.${(option.innerText).toLowerCase()}`).id = 'select'

    })
});


Array.from(document.querySelectorAll(".option-abas")).forEach(option => {
    option.addEventListener('click', function(){
        if(document.querySelectorAll('.abas#select').length > 0){
            document.querySelector(".abas#select").id = "nao-select"
        }
        let textOption = ((option.innerText).toLowerCase()).substr(3)
        document.querySelector(`.${textOption}`).id = "select"
        if(document.querySelectorAll(".option-abas#select").length > 0){
            document.querySelector(".option-abas#select").id = ''
        }
        option.id = 'select'
        document.body.id = textOption

        if(textOption == "crew"){
            document.getElementsByClassName("main")[0].style.alignItems = 'end'
        }else{
            document.getElementsByClassName("main")[0].style.alignItems = 'center'
        }
        document.getElementById("ul").classList.remove("ativo")
        document.getElementsByClassName('main')[0].style.display = 'flex'
        
    })
});

Array.from(document.querySelectorAll(".options-bola")).forEach(options => {
    options.addEventListener('click', function(){
        if(document.querySelectorAll(".pessoa#select").length > 0){
            document.querySelector(".pessoa#select").id = ''
        }
        let idOption = options.id
        console.log(idOption)
        document.querySelector(`.${idOption}`).id = 'select'
        
    })
    
})

Array.from(document.querySelectorAll(".option-instalacoes")).forEach(options => {
    options.addEventListener('click', function(){
        if(document.querySelectorAll(".instalacoes#select").length > 0){
            document.querySelector(".instalacoes#select").id = ''
        }
        let idOption = options.id
        console.log(idOption)
        document.querySelector(`.${idOption}`).id = 'select'
        
    })
    
})

document.getElementById("barra").addEventListener("click", function(){
    document.getElementById("ul").classList.add("ativo")
    document.getElementsByClassName('main')[0].style.display = 'none'
})

document.getElementsByClassName("saida")[0].addEventListener("click", function(){
    document.getElementById("ul").classList.remove("ativo")
    document.getElementsByClassName('main')[0].style.display = 'flex'

})