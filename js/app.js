/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function to create the list of items of the navigation bar
function createItem(sec) {
    let sectionName = sec.getAttribute("data-nav");
    let sectionId = sec.getAttribute("id");

    let item = document.createElement("li");
    item.innerHTML = "<a class='menu__link' href='#" + sectionId + "'>" + sectionName + "</button>"

    return item;
}

// Function to set the active section in the view port


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavList() {
    navBarList.style.display = "none";
    for (let section of sections) {
        let item = createItem(section);
        navBarList.appendChild(item);
    }
    navBarList.style.display = "block";
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    for (let section of sections) {
        let sectionTop = section.getBoundingClientRect().top;
        let sectionBottom = section.getBoundingClientRect().bottom;

        if(sectionTop <= 300 && sectionBottom >= 300) {
            if(!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }
}
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavList();

// Scroll to section on link click
document.documentElement.style.scrollBehavior = "smooth";

// Set sections as active
document.addEventListener("scroll", setActiveSection);

