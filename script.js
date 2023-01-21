const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return // para o codigo imediatamente
  }
  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetuo@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-03", "01-04", "01-05"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetuo@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
