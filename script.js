const persons = [];

addPerson.onclick = function () {
    //TODO Person must be unique. add person to list with ButtonDel.
    // If person added, total will be increment
    // If person removed, total will be decrement
    // functionality with remove is optional
    const id = document.getElementById('personId').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();

    if (findPersonById(persons, id) !== -1) {
        alert("A person with this ID is already in the list. ");
        return;
    }

    const person = new Person(id, firstName, lastName, age);
    persons.push(person);

    if (person) {
        const li = document.createElement("li");
        li.append(`ID: ${person.id}, name: ${person.firstName}, ${person.lastName}, age: ${person.age}`,
            createButtonDel(person.id));
        document.getElementById("personsList").append(li);


        document.getElementById("personId").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("age").value = "";

        updateTotal();

    }


}


function findPersonById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i;
        }
    }
    return -1;
}


function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, name: ${this.firstName}, lastName: ${this.lastName},
                age: ${this.age}`;
    }
}

function updateTotal() {
    document.getElementById("totalPersons").textContent = "Total persons: " + persons.length;
}
