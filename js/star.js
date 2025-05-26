document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const selectedRating = document.querySelector('.selected-rating');
    const submitBtn = document.querySelector('.submit-btn');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            currentRating = value;
            
            // Highlight stars up to the clicked one
            stars.forEach((s, idx) => {
                if (idx < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Update rating text
            selectedRating.textContent = `You selected ${value} out of 5`;
            selectedRating.style.color = '#FFD70';
            
            // Enable submit button
            submitBtn.disabled = false;
        });
        
        // Add hover effect
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.getAttribute('data-value'));
            stars.forEach((s, idx) => {
                if (idx < value) {
                    s.style.color = '#FFD700';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach((s, idx) => {
                if (idx >= currentRating) {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    // Handle submit button click
    submitBtn.addEventListener('click', function() {
        if (currentRating <= 3) {
            selectedRating.textContent = `Thanks for your feedback of ${currentRating} stars. We'll try to improve!`;
            selectedRating.style.color = '#FF6347'; // Tomato color for low rating
        } else {
            // Redirect to your website
            window.location.href = 'https://www.google.com/search?si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6iEzNCD9WEp1IFPhYGBUKNvatuqqoXoGaji-fZAUlhAAEWExq4-6dQZ70xiTt0bnk2QdWYM1JEgHXB6ybPh877q7aGvJT61J4A11BJ1aoW9i4vM7g%3D%3D&q=Aiwa+Shippings+%26+logistics+Reviews#lrd=0x3b08729543d1abd5:0x9567afd62faec813,3,,,,';
        }
        
        // Disable the button after submission
        submitBtn.disabled = true;
    });
});