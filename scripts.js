const app = document.getElementById ('root')

const logo = document.createElement('img')


const container = document.createElement('div')    
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open ('Get', 'https://ghibliapi.herokuapp.com/vehicles', true)

request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(film => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
           
            //console.log(film.name)

            const h1 = document.createElement('h1') 
            h1.textContent = film.name

            const p = document.createElement('p')
            film.description = film.description.substring(0, 900    )
            p.textContent = `${film.description}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p  )
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
      }
}

request.send()