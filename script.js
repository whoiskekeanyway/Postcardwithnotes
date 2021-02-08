// Query selector for panel elements
const panels = document.querySelectorAll('.panel');
// for each to loop through the panel elements
panels.forEach((panel) => {
    // Event handler to listen to mouseover. click and mouse in can also be used 
   panel.addEventListener('mouseover', () => {
       // added the remove active function 
       removeActiveClasses()
       // activate class
     panel.classList.add('active');
   })
})


//function to remove active class before activaing new class
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

