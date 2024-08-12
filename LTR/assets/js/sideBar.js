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

