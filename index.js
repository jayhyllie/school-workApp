
const primaryNav = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

// funktion som loopar över alternativen och returnerar högsta

function findHighestVOte() {
  let maxVotes = 0;
  let result;

  for (let restaurant of restaurants) {
    if (restaurant.votes > maxVotes) {
      maxVotes = restaurant.votes;
    }
  }

  result = restaurants.find((restaurant) => restaurant.votes === maxVotes);
}
