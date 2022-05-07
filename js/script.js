
/*
*    DEVELOPERS :-
*    © SAYANDEEP KARAK    © sayandeep18.webdev@gmail.com    https://github.com/fuchu2003
*    © ARNAB KUMAR DAS    © electroarnab2001@gmail.com    https://github.com/akd2001
*/

// form input validation 
function validate(inputField, userReg, icon) {
    inputField.oninput = function valid() {
        if (userReg.test(inputField.value)) {
            icon.style.color = "#27d027";
        } else {
            icon.style.color = "#ff0000";
        }
    };
}
//check signin-user-name
validate(document.getElementById('loginUsername'), /^[A-Za-z]([a-zA-Z0-9\s+]){4,20}(?!\s+)$/, document.getElementById("login-user-name-icon"));
//check signup-user-name
validate(document.getElementById('signupUsername'), /^[A-Za-z]([a-zA-Z0-9\s+]){4,20}(?!\s+)$/, document.getElementById("signup-user-name-icon"));
//check signup-user-email
validate(document.getElementById("signupEmail"), /^([a-zA-Z0-9\.\-]+)@gmail\.com$/, document.getElementById("signup-user-email-icon"));


// navbar active class and tabs
let buttons = document.querySelectorAll('li');
let allSections = document.querySelectorAll('.tabs');
function tabs(index,navBtn) {
    allSections.forEach(element => element.style.display = "none");
    buttons.forEach(element => element.classList.remove('active'));
    navBtn.classList.add('active');
    allSections[index].style.display = "flex";
    // document.getElementById("menuBarToggleCheck").checked = true;
};
document.getElementById("homeBtn").onclick = ()=> {tabs(0,document.getElementById("homeBtn"))};
document.getElementById("imagesBtn").onclick = ()=> tabs(1,document.getElementById("imagesBtn"));
document.getElementById("helpBtn").onclick = ()=> tabs(2,document.getElementById("helpBtn"));
document.getElementById("aboutBtn").onclick = ()=> tabs(3,document.getElementById("aboutBtn"));

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
openpopBtn.onclick = () => {
    popup.style.display = "flex";
}

// closepopup

let closepopBtn = document.getElementById("closeForm");

closepopBtn.onclick = () => {
    popup.style.display = "none";
}