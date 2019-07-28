function setUpperBox(element, background, borderColor){
    if(background){
        element.style.backgroundColor = background;
    }
    if(borderColor){
        element.style.border = `4px solid ${borderColor}`;
    }
}

function createHero(){
    //Values from user
    let name = document.getElementById('name').value;
    let abilityOne = document.getElementById('ability-one').value;
    let descriptionOne = document.getElementById('description-one').value;
    let abilityTwo = document.getElementById('ability-two').value;
    let descriptionTwo = document.getElementById('description-two').value;
    let color = document.getElementById('color').value;
    let background = document.getElementById('background-color').value;

    //Elements to change
    let currentHero = document.getElementById('current-hero');
    let heroBox = document.getElementById('hero-box');
    let abilityBox = document.getElementById('ability-box');
    let abilities = document.getElementsByClassName('ability');
    let currentName = document.getElementById('current-name');
    let currentAbilityOne = document.getElementById('current-ability-one');
    let currentDescriptionOne = document.getElementById('current-description-one');
    let currentAbilityTwo = document.getElementById('current-ability-two');
    let currentDescriptionTwo = document.getElementById('current-description-two');
    let circle = document.getElementById('circle');


    //Text changed
    currentName.innerHTML = name;
    currentAbilityOne.innerHTML = abilityOne;
    currentDescriptionOne.innerHTML = descriptionOne;
    currentAbilityTwo.innerHTML = abilityTwo;
    currentDescriptionTwo.innerHTML = descriptionTwo;


    //Colors changed
    if(color){
        abilityBox.style.borderColor = color;
        circle.style.backgroundColor = color;
        currentName.style.color = color;
        abilities[0].style.color = color;
        abilities[1].style.color = color;
    }

    if(background){
        abilityBox.style.background = background;
        currentHero.style.background = background;
    }

    setUpperBox(heroBox, background, color);
}