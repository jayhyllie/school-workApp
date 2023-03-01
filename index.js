import {restaurants, activityFoodPlaces} from "./data.js"

const primaryNav = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})

//Event listeners
const foodBtn = document.getElementById("food-btn")
const activityBtn = document.getElementById("activity-btn")

foodBtn.addEventListener("click", function() {
  renderAlternativeCards(restaurants)
})

activityBtn.addEventListener("click", function() {
  renderAlternativeCards(activityFoodPlaces)
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

const winnerBtn = document.getElementById("winner-btn")

winnerBtn.addEventListener("click", function(e) {
  renderWinner(activityFoodPlaces)
  primaryNav.setAttribute('data-visible', false)
  navToggle.setAttribute('aria-expanded', false)

})

function renderWinner(array) {
  const container = document.querySelector(".main")
  const winner = findHighestVOte(array);
  container.innerHTML = `
        <article class="vote__winner">
          <img src="${winner.imgUrl}" alt="" class="winner--image">
          <section class="winner">
            <h2 class="winner--name">${winner.name}</h2>
            <p class="winner-address">${winner.address}</p>
            <h3 class="winner--food">${winner.foodType}</h3>
            ${winner.activityType ? `<p class="info--activity">${winner.activityType}</p>` : ""}
            <a href="${winner.url}" class="winner--web">Hemsida</a>
            <p class="winner--opening">${winner.openingHours}</p>
            <span class="winner--direction">Vägbeskrivning</span>
          </section>
        </article>
  `
}


function renderAlternativeCards(array) {
  const mainContainer = document.querySelector(".main")
  mainContainer.innerHTML = ``
  array.forEach(venue => {
    const cardEl = document.createElement('article')
    cardEl.classList.add("main__card")
    cardEl.innerHTML = `
        <img src="${venue.imgUrl}" alt="" class="card--image">
    <section class='main__card--info'>
      <h2 class="info--name">${venue.name}</h2>
      <p class="info--address"></p>
      ${venue.activityType ? `<p class="info--activity">${venue.activityType}</p>` : ""}
      <h3 class="info--food">${venue.foodType}</h3>
      <a href="${venue.url}" class="info--web">Gå till hemsida</a>
      <p class="info--opening">${venue.openingHours}</p>
      <button>Välj</button>
    </section>
    `
    mainContainer.insertAdjacentElement("afterbegin", cardEl)
    //eventlystnare på cardEl
    const voteButton = cardEl.querySelector("button")
    cardEl.addEventListener('click', function(e) {
      console.log("testtest")
    if(e.target === voteButton) {
      venue.votes++
      renderVoteChart()
      console.log(venue.votes)
    }
    })
  })
}

// renderAlternativeCards(restaurants)



function renderVoteChart() {
  document.querySelector('.main').innerHTML = ''
  const combinedArray = restaurants.concat(activityFoodPlaces)
  
  //hitta top 5 i kombinerade arrayen
  const winnersArray = [];
  for (let i = 0; i< 5; i++) {
    //kammar igenom kombinerade arrayen 5 gånger och flyttar toppalternativet till vinnararrayen
    let highest = findHighestVOte(combinedArray);
    winnersArray.push(highest);
    combinedArray.splice(combinedArray.indexOf(highest), 1)
  }

  //renderar ut vinnararrayen
  const winnersArtEl = document.createElement('article');
  winnersArtEl.classList.add('vote__stats');
  const winnersUlEl = document.createElement('ul');
  winnersUlEl.classList.add('vote__stats--list');
  winnersUlEl.setAttribute('role', 'list');

  winnersArray.forEach(winner => {
    const voteCountEl = document.createElement('li');
    voteCountEl.classList.add('vote__stats--list-item');
    voteCountEl.innerHTML = `
      <span class="voteResult" style="height: ${winner.votes * 5}"></span>
      <h4 class="vote--venue">${winner.name}</h4>`;
    winnersUlEl.appendChild(voteCountEl);
  });
  winnersArtEl.appendChild(winnersUlEl);
  
  document.querySelector('.main').appendChild(winnersArtEl)
}