
function render(){
       
    html = `
    <div id="pointsElement">${points}</div>
    <div id="multiplyer">Multiplyer: ${bonusMultiplier}x</div>


    <img id="zeroTwo" class="zero-two" onclick="clicking()"src="./images/Zero-Two.png" ><hr>
    <button id="multiplyBtn" class="buttons" onclick="buyUpgrade()">Multiply${multiplyPrice}</button>
    <button id="autoClickBtn" class="buttons" onclick="buyAutoClick()">AutoClick${autoClickerPrice}</button>
    <button id="bonusBtn" class="buttons" onclick="bonus()">Bonus${bonusPointsPrice}</button>
    <p>you own ${autoClickers} AutoClickers</p>
    `;


document.getElementById('app').innerHTML = html;
    cantAfford();
}

