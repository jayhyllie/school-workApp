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
