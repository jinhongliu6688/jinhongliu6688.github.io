/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // type animation
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.04em solid #fff; }";
        document.body.appendChild(css);
    };
    // type animation ends

    // var TxtType = function (el, toRotate, period) {
    //     this.toRotate = toRotate;
    //     this.el = el;
    //     this.loopNum = 0;
    //     this.period = parseInt(period, 10) || 2000;
    //     this.txt = '';
    //     this.tick();
    //     this.isDeleting = false;
    // };
    
    // TxtType.prototype.tick = function () {
    //     var i = this.loopNum % this.toRotate.length;
    //     var fullTxt = this.toRotate[i];
    
    //     if (this.isDeleting) {
    //         this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //         this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }
    
    //     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
    //     var that = this;
    //     var delta = 50; // Adjust the speed as needed
    
    //     if (this.isDeleting) {
    //         delta /= 2;
    //     }
    
    //     if (!this.isDeleting && this.txt === fullTxt) {
    //         delta = this.period;
    //         this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //         this.isDeleting = false;
    //         this.loopNum++;
    //         delta = 500;
    //     }
    
    //     setTimeout(function () {
    //         that.tick();
    //     }, delta);
    // };
    
    // window.onload = function () {
    //     var elements = document.getElementsByClassName('typewrite');
    //     for (var i = 0; i < elements.length; i++) {
    //         var toRotate = elements[i].getAttribute('data-type');
    //         var period = elements[i].getAttribute('data-period');
    //         if (toRotate) {
    //             new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    //     // INJECT CSS
    //     var css = document.createElement("style");
    //     css.type = "text/css";
    //     css.innerHTML = ".typewrite > .wrap { border-right: 0.04em solid #fff; }";
    //     document.body.appendChild(css);
    // };


    // Initialize ScrollReveal
    ScrollReveal().reveal('.scroll-reveal', {
        delay: 400,
        distance: '20px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'right', // Change this to 'left', 'right', or 'top' as needed
        // reset: true,
    });


});
