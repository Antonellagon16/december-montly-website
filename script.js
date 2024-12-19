// Capitalize the first letter of each part of the name
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate prefix based on first name length or other conditions
function generatePrefix(firstName) {
    if (firstName.length > 8) {
        return 'The Invincible';
    } else if (firstName.length > 6) {
        return 'The Magnificent';
    } else if (firstName.length > 4) {
        return 'The Great';
    } else if (firstName.length > 2) {
        return 'The Brave';
    } else {
        return 'Master';
    }
}

// Generate first name based on the first letter
function generateFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    switch (firstLetter) {
        case 'a': return 'Artemis';
        case 'b': return 'Balthazar';
        case 'c': return 'Cyrus';
        case 'd': return 'Darius';
        case 'e': return 'Eldric';
        case 'f': return 'Felix';
        case 'g': return 'Galen';
        case 'h': return 'Horace';
        case 'i': return 'Ignatius';
        case 'j': return 'Jasper';
        case 'k': return 'Kairos';
        case 'l': return 'Lysander';
        case 'm': return 'Milo';
        case 'n': return 'Nikolai';
        case 'o': return 'Orion';
        case 'p': return 'Percival';
        case 'q': return 'Quentin';
        case 'r': return 'Roderick';
        case 's': return 'Silas';
        case 't': return 'Thaddeus';
        case 'u': return 'Ulysses';
        case 'v': return 'Valerian';
        case 'w': return 'Wulfric';
        case 'x': return 'Xander';
        case 'y': return 'Yorick';
        case 'z': return 'Zacharias';
        default: return 'Alexandros';
    }
}

// Generate middle name based on the road type and favorite color
function generateMiddleName(roadType, favoriteColor) {
    if (roadType === 'Road') return `${favoriteColor}trail`;
    if (roadType === 'Street') return `${favoriteColor}lane`;
    if (roadType === 'Court') return `${favoriteColor}stone`;
    if (roadType === 'Avenue') return `${favoriteColor}path`;
    if (roadType === 'Boulevard') return `${favoriteColor}way`;
    if (roadType === 'Drive') return `${favoriteColor}wayfarer`;
    return `${favoriteColor}gate`;
}

// Generate last name based on the last letter of the last name
function generateLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
    switch (lastLetter) {
        case 'a': return 'Dawn';
        case 'b': return 'Storm';
        case 'c': return 'Blaze';
        case 'd': return 'Nightshade';
        case 'e': return 'Thunder';
        case 'f': return 'Fire';
        case 'g': return 'Hawk';
        case 'h': return 'Wolf';
        case 'i': return 'Frost';
        case 'j': return 'Shadow';
        case 'k': return 'Steel';
        case 'l': return 'Flare';
        case 'm': return 'Moon';
        case 'n': return 'Wind';
        case 'o': return 'Flame';
        case 'p': return 'Stormbringer';
        case 'q': return 'Star';
        case 'r': return 'Viper';
        case 's': return 'Valkyrie';
        case 't': return 'Cinder';
        case 'u': return 'Thunderstrike';
        case 'v': return 'Ember';
        case 'w': return 'Dragon';
        case 'x': return 'Nightfall';
        case 'y': return 'Starfire';
        case 'z': return 'Phoenix';
        default: return 'Moon';
    }
}

// Generate suffix based on the favorite animal
function generateSuffix(favoriteAnimal) {
    switch (favoriteAnimal.toLowerCase()) {
        case 'lion': return 'of the Lion';
        case 'tiger': return 'of the Tiger';
        case 'eagle': return 'of the Eagle';
        case 'dog': return 'of the Dog';
        case 'wolf': return 'of the Wolf';
        case 'phoenix': return 'of the Phoenix';
        case 'bear': return 'of the Bear';
        case 'snake': return 'of the Serpent';
        case 'cats': return 'of the Cats';
        case 'bird': return 'of the Birds';
        case 'horse': return 'of the Horses';
        case 'peacock': return 'of the Peacock';
        default: return `of the Hawks`;
    }
}

// Assemble full fantasy name
function generateFullName() {
    // Get values from input fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value.trim();
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    // Generate each part of the name
    const prefix = generatePrefix(firstName);
    const newFirstName = generateFirstName(firstName);
    const middleName = generateMiddleName(roadType, favoriteColor);
    const newLastName = generateLastName(lastName);
    const suffix = generateSuffix(favoriteAnimal);

    // Capitalize all parts of the name
    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);
    const capitalizedSuffix = capitalize(suffix);

    // Create the full name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${capitalizedSuffix}`;

    // Display the full name in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = fullName;
    resultDiv.classList.add('result-style');
}
