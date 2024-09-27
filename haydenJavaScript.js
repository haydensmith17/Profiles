function hayden() {
    return {
        firstName: "Hayden",
        lastName: "Smith",
        addresses: [
            { city: "Springville", state: "Utah", ZIPcode: 84663, address: "685 S Weight Ave." },
            { city: "Orem", state: "Utah", ZIPcode: 84019, address: "685 S Weight Ave." },
        ],
        age: 27,
        favoriteFood: ["fried chicken", "french fries", "pulled pork", "spaghetti", "pickles"],
        petList: [
            { type: "dog", breed: "golden lab", name: "Simba", ageLivedTo: 5 },
            { type: "cat", breed: "?", name: "Cookies", ageLivedTo: 4 },
            { type: "cat", breed: "?", name: "Midnight", ageLivedTo: 3 },
            { type: "dog", breed: "corgi lab", name: "Bear", ageLivedTo: "still living" },
            { type: "dog", breed: "corgi lab", name: "Nala", ageLivedTo: "?" },
            { type: "hedgehog", breed: "?", name: "Hippo", ageLivedTo: "?" },
        ],
        favoriteColor: ["orange", "teal", "purple"],
        degree: [
            { level: "Bachelor's" },
            { field: "Exercise Science" },
            { school: "Utah Valley University" }
        ],
        children: [
            {
                name: "Elsie",
                gender: "female",
                age: "6 months",
                eyes: "blue",
                hair: "brown",
                cutenessLevel: "infinite",
            },
            {
                name: "Buffalo",
                gender: "female",
                age: "6 months",
                eyes: "blue",
                hair: "brown",
                cutenessLevel: "infinite",
            },

        ] 
    };
}

const h = hayden()

console.log(h.children[1].age)
console.log(h.favoriteColor[1])

function displayHaydenInfo() {
    const haydenData = hayden(); // Call hayden function to get data

    const haydenInfoContainer = document.getElementById("hayden");
    haydenInfoContainer.innerHTML = ''; // Clear previous content (if any)

    const name = `<h2>${haydenData.firstName} ${haydenData.lastName}</h2>`;
    const ageElement = `<p>Age: ${haydenData.age}</p>`;
    const addressesHeading = `<h3>Addresses:</h3>`;

    // Append name and age to the container
    haydenInfoContainer.innerHTML += name + ageElement + addressesHeading;

    // Create an unordered list for addresses
    const addressesList = document.createElement("ul");

    // Loop through addresses and create list items
    haydenData.addresses.forEach(address => {
        const addressItem = document.createElement("li");
        addressItem.textContent = `${address.address}, ${address.city}, ${address.state} ${address.ZIPcode}`;
        addressesList.appendChild(addressItem);
    });

    const petList = document.createElement("ul");

    haydenData.petList.forEach(pet => {
        const petItem = document.createElement("li");
        petItem.textContent = `${pet.name}`;
        petList.appendChild(petItem);
    })

    const foodList = document.createElement("ul");
    const filteredFoods = haydenData.favoriteFood.filter(favFood => favFood != "pickles");

    filteredFoods.forEach(favFood => {
        const foodItem = document.createElement("li");
        foodItem.textContent = favFood;
        foodList.appendChild(foodItem);
    })

    // Append addresses list to the container
    haydenInfoContainer.appendChild(addressesList);
    haydenInfoContainer.appendChild(petList);
    haydenInfoContainer.appendChild(foodList);
}

const bob = h.petList.map(petName => {
    return petName.name
})

function bob2(arr) {
    const blankArray = []

    arr.forEach(petName => {
        blankArray.push(petName.name)
    })
    return blankArray
}

console.log(bob2(h.petList))

