const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");


function isTriangle(first, second , third){
    if(first + second + third === 180) {
        result.innerHTML = "congrats, mate you know math well ! it is a triangle";
    } else {
        result.innerHTML = "you are probably a programmer your math sucks welcome to the crew, this is not a triangle !";
    }
}

checkBtn.addEventListener("click", () => {
    var first = Number(angle1.value);
    var second = Number(angle2.value);
    var third = Number(angle3.value);
    if(first && second && third) {
        isTriangle(first,second,third); 
    } else {
        result.innerHTML = "bhai khali jagah mat chhod !, stay confused nai dunga answers";
    }
});