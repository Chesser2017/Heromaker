
function createHero(){
    let heroName = document.getElementById('hero-name').value;
    let firstAbility = document.getElementById('ability-one').value;
    let descriptionOne = document.getElementById('description-one').value;
    let secondAbility = document.getElementById('ability-two').value;
    let descriptionTwo = document.getElementById('description-two').value;

    let newheroName = document.getElementById('new-hero-name');
    let newfirstAbility = document.getElementById('new-ability-one');
    let newdescriptionOne = document.getElementById('new-description-one');
    let newsecondAbility = document.getElementById('new-ability-two');
    let newdescriptionTwo = document.getElementById('new-description-two');


    newheroName.innerHTML = heroName;
    newfirstAbility.innerHTML = firstAbility;
    newdescriptionOne.innerHTML = descriptionOne;
    newsecondAbility.innerHTML = secondAbility;
    newdescriptionTwo.innerHTML = descriptionTwo;    
}