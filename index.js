
const personForm = document.querySelector('#personForm')
const personPlace = document.querySelector('#personPlace')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const x = ev.target //assigned to the remaining const pulling the target of the querySelector
    const heading = document.querySelector('h1')

    const details = document.querySelector('#details')
    const name = f.personName.value
    

    //const boldedName = document.createElement('strong')
    //boldedName.textContent = name
    //details.appendChild(boldedName)
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value
    const colorDiv = `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px; "></div>`

    details.innerHTML = `
    <ul>
        <li> Name: ${name} </li>
        <li> Favorite Color: ${colorDiv}</li>
        <li> Age: ${age} </li>

    </ul>
    `


//can't take boldedName and place directly below to grab the element
// details.innerHTML += `<strong>${name}</strong>` //called string interpolation //'<strong>'+ name + '</strong>'

    heading.textContent = f.personName.value + ', ' +  x.personPlace.value 
   
}

personForm.addEventListener('submit', handleSubmit)






