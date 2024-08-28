function navfunc() { let section = document.querySelectorAll('section');
let navLinks.querySelectorAll('.nav-part2 h4 a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('class');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-part2 h4 a [href*=' + id +']').classList.add('active');
            });
        };
    });
};
}
navfunc();