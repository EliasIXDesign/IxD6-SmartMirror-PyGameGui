const container1 = document.querySelector('.container');

interact('.draggable').draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: false,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,
        }
    })

function dragMoveListener (event) {
    let target = event.target
    // keep the dragged position in the data-x/data-y attributes
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}


container1.addEventListener('click', function (){

  /* const newDiv = document.createElement('div');
   newDiv.classList.add('draggable');
   newDiv.style.marginTop = '50px';
   const container2 = document.querySelector('.container');
   container2.appendChild(newDiv);

    console.log('Its working!');
*/
})
