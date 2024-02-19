
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const ulEl = document.getElementById('todo')

formEl.addEventListener('submit', (e)=>{
    e.preventDefault()

    const taskDescription = inputEl.value

    if(taskDescription){

        const liEl = document.createElement('li')
        liEl.innerText = taskDescription
         ulEl.appendChild(liEl)

         liEl.addEventListener('click', ()=>{
            liEl.classList.toggle('completed')
         })

         liEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
            liEl.remove()
         })

         inputEl.value = ""
    }

})