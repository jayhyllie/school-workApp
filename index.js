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
    //rendera html
    //sätt eventlystnare
  })
}