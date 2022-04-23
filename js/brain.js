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
    if (e.matches) {
        let uploadBtn = document.querySelector('#button');
        console.log(uploadBtn);
        let navBar = document.querySelector("#navbar ul");
        navBar.appendChild(uploadBtn);
    }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);   