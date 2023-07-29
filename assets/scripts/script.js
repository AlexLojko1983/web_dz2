let flag = true;

function changeColor1(){
    // let element = document.getElementById("el1");
    // if (flag){
    //     element.classList.add("fire");
    //     flag = false;
    // }
    // else{
    //     element.classList.remove("fire");
    //     flag = true;
    // }
    // console.log(element);
    element.classList.toggle("fire");
    
    
    //меняем текст навсегда
    // element.textContent = "Мой первый проект!" 

    
    // if (element.textContent == "Мой первый проект!") element.textContent = "Мой проект!";
    // else element.textContent = "Мой первый проект!";
    element.textContent = element.textContent == "Мой первый проект!" ? "Мой проект!" : "Мой первый проект!";

}
function changeColor2(){    
    element2.classList.toggle("col");   
    element2.textContent = element2.textContent == "Lorem ipsum dolor sit amet consectetur adipisicing elit." ? "Кошки — ночные хищники, поэтому они отлично видят не только днём, но и ночью." : "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

}
function changeColor3(){    
   element3.classList.toggle("col");
} 

function Age1(age){
    switch (true) {
        case age<18:
            alert("Учи уроки!!");
            break;
        case age >= 18 && age < 30:
            alert("Вы совершеннолетний");
            break;
        case age >= 30:
            alert("Завтра на работу");
            break;
        default:
            alert("Некоректные данные!")
            break;
    }
}


// alert("Hi people!!");
let element = document.getElementById("el1");
console.log(element);
element.classList.add("fire");

let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click', changeColor1);

let name = prompt("Как твое имя? ");
document.getElementById("n1").textContent = name;

let age = parseInt(prompt("Сколько Вам лет?"));
Age1(age);

let element2 = document.getElementById("el2");
element2.classList.add("col");
btn.addEventListener('click', changeColor2);

let element3 = document.getElementById("el3");
element3.classList.add("col");
btn.addEventListener('click', changeColor3);