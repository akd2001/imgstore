//navbar active class

let li = document.querySelectorAll('li');

li.forEach(element => {
    element.onclick = () => {
        li.forEach(element => {
            element.classList.remove('active');
        })
        element.classList.add('active');
    };
})

//media query target

const mediaOne = window.matchMedia('(max-width: 900px)');
const mediaTwo = window.matchMedia('(max-width: 700px)');

let uploadBtn = document.querySelector('#button');
let navBar = document.querySelector("#navbar ul");

function handleTabletChange(e) {
    if (e.matches) {
        navBar.appendChild(uploadBtn);
    } else {
        let header = document.querySelector("#head");
        header.appendChild(uploadBtn);
    }
}

function handleMobileChange(e) {
    if (e.matches) {
        console.log("hello world");
    } 
}
mediaOne.addListener(handleTabletChange);
mediaTwo.addListener(handleMobileChange);
handleTabletChange(mediaOne);   
handleMobileChange(mediaTwo);   