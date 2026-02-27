//Counting
function showTab(tabName) {
            document.querySelectorAll('.section-box').forEach(el => el.classList.remove('active'));
            document.getElementById('section-' + tabName).classList.add('active');
        }

        function moveCard(cardId, destination) {
            const card = document.getElementById(cardId);
            const targetArea = document.getElementById('section-' + destination);
            const statusBtn = document.getElementById('status-btn-' + cardId);
            const actionButtons = card.querySelector('.action-buttons');
            // Move the element physically in the DOM
            targetArea.appendChild(card);

            if (destination === 'interview') {
        statusBtn.innerText = "Interview";
        statusBtn.className = "btn btn-soft btn-success no-animation cursor-default ";
        actionButtons.style.display = 'none'; //Hide the bottom buttons
    } 
    else if (destination === 'rejected') {
        statusBtn.innerText = "Rejected";
        statusBtn.className = "btn btn-soft btn-error no-animation cursor-default";
        actionButtons.style.display = 'none'; //Hide the bottom buttons
    } 
    else {
        // This runs when the delete icon is clicked (Reset to All)
        statusBtn.innerText = "Not Applied";
        statusBtn.className = "btn btn-soft btn-primary no-animation cursor-default";
        actionButtons.style.display = 'flex'; //Show the bottom buttons
    }

    updateStats();
}

        function updateStats() {
            // Count cards in each section container
            document.getElementById('total-count').innerText = document.querySelectorAll('#section-all .card').length;
            document.getElementById('interview-count').innerText = document.querySelectorAll('#section-interview .card').length;
            document.getElementById('rejected-count').innerText = document.querySelectorAll('#section-rejected .card').length;
        }

        // Initialize counts on load
        updateStats();