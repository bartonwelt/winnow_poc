/*
// init tooltips
*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: 'hover'
}));

/*
// Add body class when scrolling
*/
function addClassOnScroll() {
  const scrollThreshold = 50; // Adjust this value as needed (pixels from top)
  if (window.scrollY > scrollThreshold) {
    document.body.classList.add('scrolling');
  } else {
    document.body.classList.remove('scrolling');
  }
}

// Add event listener for scroll
window.addEventListener('scroll', addClassOnScroll);

// Call the function once on page load to check initial scroll position
addClassOnScroll();

/*
// Toggle button class
*/
function toggleBtnClass(target, newClass, oldClass) {
  target.classList.toggle(newClass);
  target.classList.toggle(oldClass);
}

/*
// Replace page title with URL param
*/
let params = new URLSearchParams(document.location.search);

if (params.size > 0) {
  let page_title = params.get("title");
  document.getElementById("pageTitle").textContent = page_title;
}

// Assign URL params to buttons
function passButtonParams(inputId, btnTarget, btnHref) {
  let inputValue = document.getElementById(inputId).value;
  let newHref = btnHref + '?title=' + inputValue;

  btnTarget.setAttribute('href', newHref);
}

/*
// Toggle checkbox on table cell click
*/
document.addEventListener('DOMContentLoaded', function() {
  const checkboxCells = document.querySelectorAll('.d-table-cell .form-check');

  checkboxCells.forEach(cell => {
    cell.addEventListener('click', function(event) {
      // Prevent default behavior if clicking directly on the input/label
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'LABEL') {
        return;
      }

      const checkbox = this.querySelector('.form-check-input');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        // Trigger the 'change' event to ensure any associated listeners are fired
        checkbox.dispatchEvent(new Event('change'));
      }
    });
  });
});