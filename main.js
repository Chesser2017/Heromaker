function setTitle(title, color){
    title.style.color = color;
    title.style.textAlign = 'center';
    title.style.fontSize = '30px';
}

function setUpperBox(element, background, borderColor){
    element.style.borderRadius = '16px';
    element.style.border = `4px solid ${borderColor}`;
    element.style.backgroundColor = background;
    element.style.width = '256px';
    element.style.height = '166px';
    element.style.margin = 'auto';
}

function createHeroCircle(circle, color){
    circle.style.width = '60px';
    circle.style.height = '60px';
    circle.style.margin = 'auto';
    circle.style.backgroundColor = color;
    circle.style.borderRadius = '100%';
}



function createHero(){
    //Values from user
    let heroName = document.getElementById('hero-name').value;
    let firstAbility = document.getElementById('ability-one').value;
    let descriptionOne = document.getElementById('description-one').value;
    let secondAbility = document.getElementById('ability-two').value;
    let descriptionTwo = document.getElementById('description-two').value;
    let heroColor = document.getElementById('hero-color').value;
    let background = document.getElementById('background-color').value;

    //Elements to change
    let newHero = document.getElementById('new-hero');
    let newHeroCircle = document.getElementById('new-hero-circle');
    let newAbilities = document.getElementById('new-abilities');
    let newheroName = document.getElementById('new-hero-name');
    let newfirstAbility = document.getElementById('new-ability-one');
    let newdescriptionOne = document.getElementById('new-description-one');
    let newsecondAbility = document.getElementById('new-ability-two');
    let newdescriptionTwo = document.getElementById('new-description-two');
    let circle = document.getElementById('circle');

    newheroName.innerHTML = heroName;
    newfirstAbility.innerHTML = firstAbility;
    newdescriptionOne.innerHTML = descriptionOne;
    newsecondAbility.innerHTML = secondAbility;
    newdescriptionTwo.innerHTML = descriptionTwo;
    
    setUpperBox(newHeroCircle, background, heroColor);
    createHeroCircle(circle, heroColor);
    setTitle(newheroName, heroColor);

    newHero.style.display = 'block';
}