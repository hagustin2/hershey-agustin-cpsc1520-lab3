// Task 1

    const resourcesDiv = document.getElementById('resources');

    const showResourcesButton = document.getElementById('show-resources');

    showResourcesButton.addEventListener('click', function() {

        resourcesDiv.classList.remove('d-none');
    });

// Task 2

    resourcesDiv.addEventListener('mouseover', function(e) {
        console.log(e.target)

        e.target.classList.add('fw-bold')

    });

// Task 3

    resourcesDiv.addEventListener('mouseout', function(e) {
        console.log(e.target)

        e.target.classList.remove('fw-bold')

// Task 5

        e.target.classList.remove('fst-italic')

    });

//  Task 4

    resourcesDiv.addEventListener('click', function(e) {
    console.log(e.target)

    e.target.classList.add('fst-italic')

});
