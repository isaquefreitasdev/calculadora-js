let n1 = document.getElementById('value1')
let n2 = document.getElementById('value2')


let soma = () => {
    let calc = Number(parseInt(n1.value) + parseInt(n2.value))
    if(n1.value == "" || n2.value === ""){
        alert("Preencha todos os campos")
    }else{
    document.getElementById('result').innerHTML = `O resultado da soma foi:${calc}`
    }
}
let multi = () => {
    let calc = Number(n1.value * n2.value)
    if(n1.value ==='' || n2.value === ""){
        alert("Preencha todos os campos")
    }else{
        document.getElementById('result').innerHTML = `O resultado da multiplicação foi:${calc}`

    }

}
let sub = () => {
    let calc = Number(n1.value - n2.value)
    if(n1.value == "" || n2.value === ""){
        alert("Preencha todos os campos")
    }else{
    document.getElementById('result').innerHTML = `O resultado da subtração foi:${calc}`
    }
}
let div = ()=>{
    let calc = Number(n1.value / n2.value)
    if(n1.value == "" || n2.value === ""){
        alert("Preencha todos os campos")}
    else{
    document.getElementById('result').innerHTML = `O resultado da divisão foi:${calc}`
    }
}




