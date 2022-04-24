
/*
*    DEVELOPERS :-
*    © SAYANDEEP KARAK    © sayandeep18.webdev@gmail.com    https://github.com/fuchu2003
*    © ARNAB KUMAR DAS    © electroarnab2001@gmail.com    https://github.com/akd2001
*/


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
const mediaTwo = window.matchMedia('(max-width: 600px)');

let uploadBtn = document.querySelector('#button');
let navBar = document.querySelector("#navbar ul");
let helpBtn = document.getElementById("helpBtn");

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
        navBar.insertBefore(uploadBtn, helpBtn);
    } else {
        mediaOne.addListener(handleTabletChange);
        handleTabletChange(mediaOne);
    }
}
mediaOne.addListener(handleTabletChange);
mediaTwo.addListener(handleMobileChange);
handleTabletChange(mediaOne);   
handleMobileChange(mediaTwo);   

// popup open and close 

let popup = document.getElementById("formSection");

// openpopup

let openpopBtn = document.getElementById('openpopBtn');
openpopBtn.onclick = ()=> {
    popup.style.display = "flex";
}

// closepopup

let closepopBtn = document.getElementById("closeForm");

closepopBtn.onclick = ()=> {
    popup.style.display = "none";
}