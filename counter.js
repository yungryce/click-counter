let coloreObject = {'red':0, 'yellow':0, 'green':0}

let body = document.querySelector('body')
let ul = document.createElement('ul')
let button = document.createElement('button')
let df = new DocumentFragment() 
body.appendChild(ul)
body.appendChild(button)

//loop through coloreObject object to get key and value
for (const[coloreKey, coloreValue] of Object.entries(coloreObject)) {
    let li  = document.createElement('li')
        li.style.backgroundColor = coloreKey
        li.style.width = '150px';
        li.style.height = '150px';
        li.textContent = Number(coloreValue)
        li.addEventListener('click', () => {
            li.textContent ++
        })
        df.appendChild(li)

        //reset button to reset all box values
        let resetter = document.querySelector('button')
        resetter.textContent = 'reset'
        resetter.addEventListener('click', () => {
            li.textContent = coloreValue
          })
}

ul.appendChild(df)
