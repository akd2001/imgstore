//navbar active class

let li = document.querySelectorAll('li');

li.forEach(element=> {
    element.onclick = ()=> {
        li.forEach(element=>{
            element.classList.remove('active');
        })
        element.classList.add('active');
    };
})

