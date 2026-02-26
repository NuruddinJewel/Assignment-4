//Counting
function showTab(tabName) {
            document.querySelectorAll('.section-box').forEach(el => el.classList.remove('active'));
            document.getElementById('section-' + tabName).classList.add('active');
        }

        function moveCard(cardId, destination) {
            const card = document.getElementById(cardId);
            const targetArea = document.getElementById('section-' + destination);
            
            // Move the element physically in the DOM
            targetArea.appendChild(card);

            // Hide Interview/Reject buttons if not in the 'All' section
            const buttons = card.querySelector('.action-buttons');
            if (destination === 'all') {
                buttons.style.display = 'flex';
            } else {
                buttons.style.display = 'none';
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