



//generate prefix
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate First Name of name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Bob'
    } else if (firstLetter === 'c') {
        return 'Carl'
    } else {
        return 'Alex'
    }//defult name if the first letter doesnt match

}
//middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'Road') {
        return `${favoriteColor}ridge`
    } else if (roadType === 'Street') {
        return `${favoriteColor}son`
    } else if (roadType === 'Court') {
        return `${favoriteColor}smith`
    } else if (roadType === 'Other') {
        return `${favoriteColor}stone`
    } else if (roadType === 'Avenue') {
        return `${favoriteColor}field`
    } else {
        return `${favoriteColor}stein`
    }
}
//generate last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase()
    if (lastLetter === 'a') {
        return 'Shadow'
    } else if (lastLetter === 'b') {
        return 'Storm'
    } else if (lastLetter === 'c') {
        return 'Blaze'
    } else if (lastLetter === 'd') {
        return 'Thorn'
    } else if (lastLetter === 'e') {
        return 'Frost'
    } else {
        return 'Moon'
    }
}

//generate suffix
function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal}`
}
//master function to assmble full name
function genFullName() {
    //define variables from inputs
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value.trim()
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()


    //genrate each part the name using Helper fuctions
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)

    //functions to capitalize words
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)
    const capitalizeMiddleName = capitalize(middleName)
    const capitalizeLastName = capitalize(newLastName)
    const capitalizeSuffix = capitalize(suffix)



    const fullName = `${capitalizePrefix}${capitalizeFirstName}${capitalizeMiddleName}${capitalizeLastName}${capitalizeSuffix}`

    //display result
    document.getElementById('result').textContent = fullName
    console.log(fullName)
}

//capitalizer function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}