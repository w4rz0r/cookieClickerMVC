//enable and disable
let canAffordMultiply = false;
let canAffordAutoClicker = false;
let canAffordBonus = false;

//points
let points = 0;
let pointsPerClick = 1;

//multiplyer
let multiplyPrice = 20;

//autoclicker
let autoClickers = 0;
let autoClickerPrice = 10;

//bonus
let bonusPointsPrice = 10;
let bonusMultiplier = 1;

let clickTimeout;

let fakeClickerInterval;

//clicking function
function clicking() {
    points += pointsPerClick * bonusMultiplier;
    pointsElement.innerText = points;
    cantAfford();
}

function disableButton(element, pointAfford) {
    if(element.disabled && points >= pointAfford) {
        element.disabled = false;
    }
    if(!element.disabled && points < pointAfford) {
        element.disabled = true;
    }
}



//multiply
function buyUpgrade() {
    if (points >= multiplyPrice) {
        points -= multiplyPrice;
        multiplyPrice *= 1.5;
        multiplyPrice = Math.floor(multiplyPrice);
        pointsPerClick++;
        render();
    }
}

// 


    
//autoclick
function buyAutoClick() {
    if(points >= autoClickerPrice) {
        points -=  autoClickerPrice;
        autoClickerPrice *= 1.5;
        autoClickerPrice = Math.floor(autoClickerPrice);
        autoClickers ++;
        setInterval(clicking, (300));
        updateFakeClick();
        render();
    }
}


function updateFakeClick() {
    if(autoClickers>4) return;
    clearInterval(fakeClickerInterval);
    fakeClickerInterval = setInterval(fakeClick, 1000-(autoClickers*200));
}

//bonus
function bonus() {
    if(points >= bonusPointsPrice && bonusMultiplier === 1){
        points -= bonusPointsPrice;
        bonusPointsPrice += 10;
        bonusMultiplier = 2;
        setTimeout((()=> {
            bonusMultiplier = 1;
            render();
        }), 10000);
        render();
    }
}




function fakeClick() {
    clearTimeout(clickTimeout);
    zeroTwo.classList.add('active')
    clickTimeout = setTimeout(() => {
        zeroTwo.classList.remove('active')
    }, 100);
}


function cantAfford() {
    disableButton(multiplyBtn, multiplyPrice);
    disableButton(autoClickBtn, autoClickerPrice);
    disableButton(bonusBtn, bonusPointsPrice);
}

//sette inn cookies perr second counter.
//om man multiplyer flere ganger stack multiplayer counteren med x1.
//legge til ekstern autockikkere i flere classes som adder img element.