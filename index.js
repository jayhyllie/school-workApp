import { restaurants, activityFoodPlaces } from "./data.js";
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
  console.log(result);
  return result
}


let restaurantResult = findHighestVOte(restaurants)