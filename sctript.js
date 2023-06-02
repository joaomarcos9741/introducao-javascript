const listelement = document.querySelector("#app ul")
const InputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = JSON.parse(localStorage.getItem("list")) || []


function renderTarefas() {

    listelement.innerHTML = ""

    for (const iterator of tarefas) {
        const tarefaElement = document.createElement("li")
        const tarefaTex = document.createTextNode(iterator)

        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        const pos = tarefas.indexOf(iterator)
        linkElement.setAttribute("onclick", `deleteTarefas(${pos})`)

        const linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)


        tarefaElement.appendChild(tarefaTex)
        tarefaElement.appendChild(linkElement)
        listelement.appendChild(tarefaElement)
    }

}
renderTarefas()


function addTarefas() {
    const tarefaTex = InputElement.value
    console.log(tarefaTex)
    tarefas.push(tarefaTex)
    InputElement.value = ""
    renderTarefas()
    saveToStorage()
}
buttonElement.onclick = addTarefas


function deleteTarefas(pos){
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem("list", JSON.stringify(tarefas))
}
