function scrollToHero() {
    document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('nav li');

    scrollLinks.forEach(function(li) {
        li.addEventListener('click', function(e) {
            e.preventDefault();

            // Assuming the anchor tag is the first child of the li element
            var targetId = this.firstElementChild.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
            // Show the background photo smoothly
            document.getElementById('hero').style.opacity = 1;
        
            // After a short delay, show the hero-content smoothly
            setTimeout(function() {
                document.querySelector('.hero-content').classList.add('show');
            }, 500); // Adjust the delay as needed
});
        

function togglePhoneNumber() {
            var phoneNumberElement = document.getElementById('phoneNumber');
            
            // Get the computed style of the element
            var displayStyle = window.getComputedStyle(phoneNumberElement).display;
        
            // Toggle the visibility based on the computed style
            phoneNumberElement.style.display = (displayStyle === 'none') ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', function () {
        var aboutSection = document.getElementById('aboutSection');

        function revealSection() {
            var scrollPosition = window.scrollY + window.innerHeight;
            var aboutSectionOffset = aboutSection.offsetTop;

            if (scrollPosition > aboutSectionOffset) {
                aboutSection.classList.add('reveal');
                
                window.removeEventListener('scroll', revealSection);
            }
        }

        
        window.addEventListener('scroll', revealSection);

        
        revealSection();
});


document.addEventListener('DOMContentLoaded', function () {
        var column = document.querySelector('.column');
        var revealed = false;

        function revealColumn() {
            var scrollPosition = window.scrollY + window.innerHeight;
            var columnOffset = column.offsetTop;

            if (!revealed && scrollPosition > columnOffset) {
                column.classList.add('reveal');
                revealed = true;
            }
        }

        
        window.addEventListener('scroll', revealColumn);

        
        revealColumn();
});


document.addEventListener('DOMContentLoaded', function () {
        var onama = document.querySelector('.onama');
        var revealed = false;

        function revealOnama() {
            var scrollPosition = window.scrollY + window.innerHeight;
            var onamaOffset = onama.offsetTop;

            if (!revealed && scrollPosition > onamaOffset) {
                onama.classList.add('reveal');
                revealed = true;
            }
        }

        
        window.addEventListener('scroll', revealOnama);

        
        revealOnama();
});


document.addEventListener('DOMContentLoaded', function () {
        var info = document.querySelector('.info');
        var revealed = false;

        function revealInfo() {
            var scrollPosition = window.scrollY + window.innerHeight;
            var infoOffset = info.offsetTop;

            if (!revealed && scrollPosition > infoOffset) {
                info.classList.add('reveal');
                revealed = true;
            }
        }

        
        window.addEventListener('scroll', revealInfo);

        
        revealInfo();
});


document.addEventListener('DOMContentLoaded', function () {
        var iskustva = document.getElementById('iskustva');

        function revealSection() {
            var scrollPosition = window.scrollY + window.innerHeight;
            var iskustvaOffset = iskustva.offsetTop;

            if (scrollPosition > iskustvaOffset) {
                iskustva.classList.add('reveal');
                
                window.removeEventListener('scroll', revealSection);
            }
        }

        
        window.addEventListener('scroll', revealSection);

        
        revealSection();
});


document.addEventListener("DOMContentLoaded", function () {
        var menuIcon = document.getElementById("menu-icon");
        var nav = document.querySelector("nav");
        
        menuIcon.addEventListener("click", function () {
            nav.classList.toggle("show-nav");
        });

        var navItems = document.querySelectorAll("nav li");
        navItems.forEach(function (item) {
            item.addEventListener("click", function () {
                nav.classList.remove("show-nav");
            });
        });
});