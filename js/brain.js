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

const mediaQuery = window.matchMedia('(max-width: 900px)');

function handleTabletChange(e) {
    let uploadBtn = document.querySelector('#button');
    if (e.matches) {
        let navBar = document.querySelector("#navbar ul");
        navBar.appendChild(uploadBtn);
    } else{
        let header = document.querySelector("#head");
        header.appendChild(uploadBtn);
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);   