document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const pages = book.querySelectorAll('.page');
    let currentPage = 0;

    function flipBook(direction) {
        if (direction === 'next' && currentPage < pages.length - 1) {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 0) {
            currentPage--;
        }

        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.style.transform = 'rotateY(0deg)';
            } else if (index === currentPage + 1) {
                page.style.transform = 'rotateY(-180deg)';
            } else {
                page.style.transform = 'rotateY(180deg)';
            }
        });
    }

    document.querySelector('.next-btn').addEventListener('click', () => flipBook('next'));
    document.querySelector('.prev-btn').addEventListener('click', () => flipBook('prev'));
});

// Array of slides with titles and descriptions
const slides = [
    {
        img: "img/money/1.jpg", title: "Provides financial transparency: ", description: "By systematically recording your accounts, you can clearly "
            + "understand your financial situation, which "
            + "helps to identify potential financial issues"
            + "and take timely action to make adjustments."
    },
    {
        img: "img/money/2.jpg", title: "Helps set and achieve financial goals:", description: "Keeping track of your expenses makes it easier to set"
            + " budgets and financial goals, and by continuously"
            + " monitoring and adjusting your spending, you can ensure that these goals are met."
    },
    {
        img: "img/money/3.jpg", title: "Helps control spending:", description: "By recording every expense, you can clearly see where your money is going, "
            + "thus avoiding unnecessary spending and helping you make more informed financial decisions"
    },
];

let currentIndex = 0;
let isFlipped = false;

function updateHiddenSide(nextIndex) {
    const hiddenSideImage = isFlipped ? document.getElementById("front-image") : document.getElementById("back-image");
    const hiddenSideTitle = isFlipped ? document.getElementById("front-title") : document.getElementById("back-title");
    const hiddenSideDescription = isFlipped ? document.getElementById("front-description") : document.getElementById("back-description");

    hiddenSideImage.src = slides[nextIndex].img;
    hiddenSideTitle.innerText = slides[nextIndex].title;
    hiddenSideDescription.innerText = slides[nextIndex].description;
}

function flip(next) {
    const flipper = document.querySelector(".flipper");

    // Determine the next slide index
    const nextIndex = (currentIndex + (next ? 1 : -1) + slides.length) % slides.length;

    // Pre-load content on the hidden side
    updateHiddenSide(nextIndex);

    // Flip animation
    isFlipped = !isFlipped;
    flipper.classList.toggle("flipped", isFlipped);

    // After flip, update the current index
    setTimeout(() => {
        currentIndex = nextIndex;
    }, 600); // Wait for the flip animation to complete
}

function nextPage() {
    flip(true);
}

function previousPage() {
    flip(false);
}

// Initialize the first slide
document.getElementById("front-image").src = slides[0].img;
document.getElementById("front-title").innerText = slides[0].title;
document.getElementById("front-description").innerText = slides[0].description;
updateHiddenSide(1); // Pre-load the second slide on the back
