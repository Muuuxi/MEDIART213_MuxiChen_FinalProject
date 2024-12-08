// Get the switch element
const toggleSwitch = document.getElementById('toggle');

// Get two modules
const selfModule = document.getElementById('self-module');
const portfolioModule = document.getElementById('portfolio-module');

// Ensure that the Portfolio module is displayed by default
portfolioModule.classList.add('active');
selfModule.classList.remove('active');

// Monitor switch changes
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        // If the switch is selected, show Self Module and hide Portfolio Module
        selfModule.classList.add('active');
        portfolioModule.classList.remove('active');
    } else {
        // If the switch is not checked, show Portfolio Module and hide Self Module
        portfolioModule.classList.add('active');
        selfModule.classList.remove('active');
    }
});



// Add dynamic hover effect
const selfCircle = document.querySelector('.self-circle');
const portfolioCircle = document.querySelector('.portfolio-circle');

selfCircle.addEventListener('mouseover', () => {
  document.getElementById('self-text').textContent = 'Explore Self Module';
});

portfolioCircle.addEventListener('mouseover', () => {
  document.getElementById('portfolio-text').textContent = 'Explore Portfolio Module';
});

selfCircle.addEventListener('mouseout', () => {
  document.getElementById('self-text').textContent = 'Self';
});

portfolioCircle.addEventListener('mouseout', () => {
  document.getElementById('portfolio-text').textContent = 'Portfolio';
});


function scrollToContent(contentId) {
  const content = document.getElementById(contentId);
  content.scrollIntoView({ behavior: 'smooth' });
}
