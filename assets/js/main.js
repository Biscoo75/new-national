(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

// cards start //
// var home = document.getElementById('pills-home');
// var profile = document.getElementById('pills-profile');
// var contact = document.getElementById('pills-contact');
// var islam = document.getElementById('pills-islam');
// var firstButton = document.getElementById('pills-home-tab');
// var secondButton = document.getElementById('pills-profile-tab');
// var thirdButton = document.getElementById('pills-contact-tab');
// var fourthButton = document.getElementById('pills-islam-tab');


// secondButton.addEventListener('click', function () {
//     profile.classList.replace('d-none', 'd-block');
//     home.classList.replace('d-block', 'd-none');
//     contact.classList.replace('d-block', 'd-none');
//     islam.classList.replace('d-block', 'd-none');
//     console.log('hi')
// });

// firstButton.addEventListener('click', function () {
//     home.classList.replace('d-none', 'd-block');
//     profile.classList.replace('d-block', 'd-none');
//     contact.classList.replace('d-block', 'd-none');
//     islam.classList.replace('d-block', 'd-none');
//     console.log('hi')

// });

// thirdButton.addEventListener('click', function () {
//     contact.classList.replace('d-none', 'd-block');
//     home.classList.replace('d-block', 'd-none');
//     profile.classList.replace('d-block', 'd-none');
//     islam.classList.replace('d-block', 'd-none');
// });
// fourthButton.addEventListener('click', function () {
//     islam.classList.replace('d-none', 'd-block');
//     home.classList.replace('d-block', 'd-none');
//     profile.classList.replace('d-block', 'd-none');
//     contact.classList.replace('d-block', 'd-none');
// });

document.querySelectorAll('[id^="pills-home-tab_"]').forEach(function(button) {
    button.addEventListener('click', function() {
        var tabIndex = this.id.split('_')[1]; // Extract the index from the button's ID
        var activeTab = document.getElementById('pills-home_' + tabIndex);
        var tabs = document.querySelectorAll('[id^="pills-home_"]');
        var buttons = document.querySelectorAll('[id^="pills-home-tab_"]');

        // Remove active class from all buttons and hide all tabs
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        tabs.forEach(function(tab) {
            tab.classList.add('d-none');
            tab.classList.remove('d-block');
        });

        // Add active class to the clicked button and show the corresponding tab
        this.classList.add('active');
        activeTab.classList.remove('d-none');
        activeTab.classList.add('d-block');
    });
});


// ^==============our team section
//============= sidebar start
function openNav() {
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar").style.width = "100%";
    }
    else {
        document.getElementById("sidebar").style.width = "350px";

    }
    // document.getElementById("main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
}
function hideSideBarButton() {
    var sideBarButton = document.getElementById('sideBarButton');
    sideBarButton.style.display = 'none';
}
//! inputs placeholders
function handleDateInput() {
    // Get the input element
    const dateInput = document.getElementById('dateInput');

    // Get the input value
    const inputValue = dateInput.value;

    // Log the input value to the console
    console.log('Input value:', inputValue);
}


//& Function to move the li elements into the sidebar for small screens start
function moveLiToSidebar() {
    var searchGroupLi = document.getElementById('searchGroup');
    var transsLi = document.getElementById('transs');
    var carttLi = document.getElementById('cartt');
    var wishListtLi = document.getElementById('wishListt');
    var profileLi = document.getElementById('profile');
    var logOutLi = document.getElementById('logOut'); // New variable for logOut
    var iconContainer = document.getElementById('iconContainer');
    var searchInPhone = document.getElementById('searchInPhone');
    var mainContent = document.getElementById('main-content');

    if (window.innerWidth <= 991) {
        // Move searchGroupLi to searchInPhone
        if (searchGroupLi && !searchInPhone.contains(searchGroupLi)) {
            searchInPhone.appendChild(searchGroupLi);
        }
        // Move profileLi and logOutLi to iconContainer
        if (profileLi && !iconContainer.contains(profileLi)) {
            iconContainer.appendChild(profileLi);
        }
        if (logOutLi && !iconContainer.contains(logOutLi)) {
            iconContainer.appendChild(logOutLi);
        }
        // Move transsLi, carttLi, wishListtLi to iconContainer
        if (transsLi && !iconContainer.contains(transsLi)) {
            iconContainer.appendChild(transsLi);
        }
        if (carttLi && !iconContainer.contains(carttLi)) {
            iconContainer.appendChild(carttLi);
        }
        if (wishListtLi && !iconContainer.contains(wishListtLi)) {
            iconContainer.appendChild(wishListtLi);
        }
    } else {
        // Move all items back to mainContent
        if (searchGroupLi && !mainContent.contains(searchGroupLi)) {
            mainContent.appendChild(searchGroupLi);
        }
        if (profileLi && !mainContent.contains(profileLi)) {
            mainContent.appendChild(profileLi);
        }
        if (logOutLi && !mainContent.contains(logOutLi)) {
            mainContent.appendChild(logOutLi);
        }
        if (transsLi && !mainContent.contains(transsLi)) {
            mainContent.appendChild(transsLi);
        }
        if (carttLi && !mainContent.contains(carttLi)) {
            mainContent.appendChild(carttLi);
        }
        if (wishListtLi && !mainContent.contains(wishListtLi)) {
            mainContent.appendChild(wishListtLi);
        }
    }
}

// Call the function on page load and when the window is resized
window.addEventListener('load', moveLiToSidebar);
window.addEventListener('resize', moveLiToSidebar);

//^=========================== the popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Wait for 20 seconds before showing the popup
setTimeout(showPopup, 100000);
// console.log('pop');



function populateNationalities() {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => {
            const dropdownMenu = document.getElementById('nationalityDropdown');
            dropdownMenu.innerHTML = ''; // Clear existing items
            data.forEach(country => {
                if (country?.name) {
                    const listItem = document.createElement('a');
                    listItem.classList.add('dropdown-item');
                    listItem.href = '#';
                    listItem.textContent = country.name;
                    listItem.onclick = function () {
                        selectItem(country.name);
                    };
                    dropdownMenu.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Error fetching nationalities:', error));
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('nationalityDropdown');
    dropdownContent.style.display === 'block' ? dropdownContent.style.display = 'none' : dropdownContent.style.display = 'block';
}

function selectItem(item) {
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.textContent = item;
    toggleDropdown(); // Hide dropdown after selecting an item
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
// Call the function to populate nationalities when the page loads
document.addEventListener('DOMContentLoaded', populateNationalities);

//^==============================check-out stepper
const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')

const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')

const formSubmitBtn = document.querySelector('.formbold-btn')
const formBackBtn = document.querySelector('.formbold-back-btn')

formSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (stepMenuOne.className == 'formbold-step-menu1 active') {
        event.preventDefault()

        stepMenuOne.classList.remove('active')
        stepMenuTwo.classList.add('active')

        stepOne.classList.remove('active')
        stepTwo.classList.add('active')

        formBackBtn.classList.add('active')
        formBackBtn.addEventListener("click", function (event) {
            event.preventDefault()

            stepMenuOne.classList.add('active')
            stepMenuTwo.classList.remove('active')

            stepOne.classList.add('active')
            stepTwo.classList.remove('active')

            formBackBtn.classList.remove('active')

        })

    } else if (stepMenuTwo.className == 'formbold-step-menu2 active') {
        event.preventDefault()

        stepMenuTwo.classList.remove('active')
        stepMenuThree.classList.add('active')

        stepTwo.classList.remove('active')
        stepThree.classList.add('active')

        formBackBtn.classList.remove('active')
        formSubmitBtn.textContent = 'Submit'
    } else if (stepMenuThree.className == 'formbold-step-menu3 active') {
        document.querySelector('form').submit()
    }
})

//^===================== profile edit card
document.addEventListener('DOMContentLoaded', function () {
    var personalTab = document.getElementById('personal-tab');
    var editTab = document.getElementById('edit-tab');
    var personalDiv = document.getElementById('personal');
    var editDiv = document.getElementById('edit');

    personalTab.addEventListener('click', function () {
        personalDiv.classList.remove('d-none');
        editDiv.classList.add('d-none');
        personalTab.classList.add('active');
        editTab.classList.remove('active');
    });

    editTab.addEventListener('click', function () {
        personalDiv.classList.add('d-none');
        editDiv.classList.remove('d-none');
        editTab.classList.add('active');
        personalTab.classList.remove('active');
    });
});












flatpickr("#datepicker", {
    // Options for Flatpickr
});