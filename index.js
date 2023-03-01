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
function findHighestVOte(array) {
  let maxVotes = 0;
  let result;

  for (let restaurant of array) {
    if (restaurant.votes > maxVotes) {
      maxVotes = restaurant.votes;
    }
  }

  result = array.find((restaurant) => restaurant.votes === maxVotes);
  return result
}

//funktion som renderar ut korten och sätter eventlystnare på dem
function renderCards(array) {
  array.forEach(alternative => {
    //funktion som tar ett objekt och returnerar ett html-element
    let cardEl = makeAlternativeCard(card)

    //lägg till eventlystnare på cardEL och lägg in i ui:n
  })
}

function makeAlternativeCard(card) {
  let cardEl = document.createElement(/*vad det nu ska vara*/)
  cardEl.innerHTML = ``
  cardEl.classList.add() //eventuellt också på dess children
  return cardEL
}

//hallå hallå