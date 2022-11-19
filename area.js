const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkBtn = document.querySelector(".triangle-area");
const result = document.querySelector("#result");

function calculateArea(side1, side2, side3) {
    var p = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    result.innerText = "Area is " + area.toFixed(2);
}

checkBtn.addEventListener("click", () => {
    var side1 = Number(angle1.value);
    var side2 = Number(angle2.value);
    var side3 = Number(angle3.value);

    if( (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2) ){
        if (side1 >= 1 && side2 >= 1 && side3 >= 1) {
            calculateArea(side1, side2, side3);
        } else {
            result.innerText = "enter a postitive value";
        }
    } else {
        result.innerText = "sum of two sides should exced third side"
    }

    
});