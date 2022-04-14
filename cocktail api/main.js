

const drinkPic = document.querySelector('.drink-pic')
const drinkName = document.querySelector('.drink-name')
const ingredients = document.querySelector('.ingredients')
const instructions = document.querySelector('.instructions')

function getNewDrink() {
    URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let drink = data.drinks[0]
            drinkPic.src = drink.strDrinkThumb
            drinkName.innerText = drink.strDrink
            instructions.innerText = drink.strInstructions

            // clear the ingedients list
            ingredients.innerHTML = ''

            // populate the ingredients list
            let i = 1;
            for (let i=1; i<15; i++) {
                if (drink['strIngredient' + i] !== null) {
                    let li = document.createElement('li');
                let text = drink['strIngredient' + i.toString()]
                li.innerText = text;
                ingredients.appendChild(li)
                }
            }


        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('.btn').addEventListener('click', getNewDrink)