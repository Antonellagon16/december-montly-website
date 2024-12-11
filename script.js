



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
    const roadType = document.getElementById('roasType').value.trim()
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()


    //genrate each part the name using Helper fuctions
    const prefix = genPrefix(firstName)
    const FirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = gensuffix(favoriteAnimal)

}