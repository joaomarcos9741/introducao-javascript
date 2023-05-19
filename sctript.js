const listelement = document.querySelector("#app ul")
const InputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["Estudar para Prova", "Dormir cedo"]

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaTex = document.createTextNode(iterator)

    tarefaElement.appendChild(tarefaTex)
    listelement.appendChild(tarefaElement)
}


