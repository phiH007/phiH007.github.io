// Simple Function
let counter = 0;
function update(){
    document.getElementById("counter").innerHTML = counter
}

function tickUp(){
    counter++;
    update();
}
function tickDown(){
    counter--;
    update();
}


// Simple For Loop
function runForLoop(){
    const temp = []
    for (let i = 0; i <= counter; i++){
        temp.push(i)
        document.getElementById("forLoopResult").innerHTML = temp.join(" ");
    }
}

// Repetition with Condition
function showOddNumbers(){
    const temp = []
    for (let i = 0; i <= counter; i++){
        if (i%2 == 1){
            temp.push(i)
        }
        document.getElementById("oddNumberResult").innerHTML = temp.join(" ");
    }
}    



// Array
function addMultiplesToArray(){
    const temp = []
    for (let i = counter; i >= 0; i--){
        if (i%5 == 0 && i > 4){
            temp.push(i)
        }
    }
    console.log(temp)
}    


// Form Fields
function loadCar(carNum){
    let car;

    switch(carNum){
        case 1:
            car = carObject1;
            break;
        case 2:
            car = carObject2;
            break;
        case 3:
            car = carObject3;
            break;
        default:
            console.log("car not found");
            break;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;

}

function printCarObject(){
    const car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    }
    console.log(car)
}

// Change Styles
function changeColor(color){
    switch(color){
        case 1:
            document.getElementById("styleParagraph").style.color = "red";
            break;
        case 2:
            document.getElementById("styleParagraph").style.color = "green";
            break;    
        case 3:
            document.getElementById("styleParagraph").style.color = "blue";
            break;
        default:
            document.getElementById("styleParagraph").style.color = "black";
            break;
        }
}