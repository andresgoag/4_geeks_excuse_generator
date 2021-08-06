const pExcuse = document.querySelector("#excuse");

const getRandomItem = (anArray) => {
    return anArray[Math.floor(Math.random() * (anArray.length))];
}

const getExcuse = () => {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let excuse = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}`;

    return excuse;
}

const changeExcuse = (ev) => {
    let newExcuse = getExcuse();
    pExcuse.innerHTML = newExcuse;
}

const tryAgainButton = document.querySelector("#tryAgainButton");
tryAgainButton.addEventListener('click', changeExcuse);