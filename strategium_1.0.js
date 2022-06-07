function getAvgResult() {

    let attacks = document.getElementById("attacks").value;
    let hitsOn = document.getElementById("hitsOn").value;
    let woundsOn = document.getElementById("woundsOn").value;
    let savesOn = document.getElementById("savesOn").value;
    let shrugsOn = document.getElementById("shrughsOn").value;
    let avgResult = 0

    const coef = [0.16667, 0.33334, 0.50001, 0.66668, 0.83335];

    if (hitsOn === "6") {
        avgResult = attacks - (attacks * coef[4]);
    } else if (hitsOn === "5") {
        avgResult = attacks - (attacks * coef[3]);
    } else if (hitsOn === "4") {
        avgResult = attacks - (attacks * coef[2]);
    } else if (hitsOn === "3") {
        avgResult = attacks - (attacks * coef[1]);
    } else {
        avgResult = attacks - (attacks * coef[0]);
    }
          
    if (woundsOn === "6") {
        avgResult = avgResult - (avgResult * coef[4]);
    } else if (woundsOn === "5") {
        avgResult = avgResult - (avgResult * coef[3]);
    } else if (woundsOn === "4") {
        avgResult = avgResult - (avgResult * coef[2]);
    } else if (woundsOn === "3") {
        avgResult = avgResult - (avgResult * coef[1]);
    } else {
        avgResult = avgResult - (avgResult * coef[0]);
    }
        
    if (savesOn === "6") {
        avgResult = avgResult - (avgResult * coef[0]);
    } else if (savesOn === "5") {
        avgResult = avgResult - (avgResult * coef[1]);
    } else if (savesOn === "4") {
        avgResult = avgResult - (avgResult * coef[2]);
    } else if (savesOn === "3") {
        avgResult = avgResult - (avgResult * coef[3]);
    } else if (savesOn === "2") {
        avgResult = avgResult - (avgResult * coef[4]);
    } else {
        avgResult = avgResult;
    }
        
    if (shrugsOn === "6") {
        avgResult = avgResult - (avgResult * coef[0]);
    } else if (shrugsOn === "5") {
        avgResult = avgResult - (avgResult * coef[1]);
    } else if (shrugsOn === "4") {
        avgResult = avgResult - (avgResult * coef[2]);
    } else {
        avgResult = avgResult;
    }
    
    document.getElementById("result").innerHTML = avgResult.toFixed(2) + " * D wounds  on average"
}

function reset() {
    document.getElementById("attacks").value = null;
    document.getElementById("hitsOn").value = null;
    document.getElementById("woundsOn").value = null;
    document.getElementById("savesOn").value = null;
    document.getElementById("shrughsOn").value = null;
    document.getElementById("result").innerHTML = "";
}