function createButtonDel(personId) {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = "10px";

    buttonDel.addEventListener('click', e => {
        const index = findPersonById(persons, personId);
        if (index !== -1) {
            persons.splice(index, 1);
        }

        e.target.parentElement.remove();
        updateTotal();
    });
    return buttonDel;
}
