const activityFoodPlaces = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1545056453-f0359c3df6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Bowl-o-rama",
    address: "Kungsgatan 10, Stockholm",
    foodType: "Amerikansk",
    activityType: "Bowling",
    url: "http://www.bowl-o-rama.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1544281153-6603be88b354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "The Billiard Room",
    address: "Storgatan 12, Göteborg",
    foodType: "Pubmat",
    activityType: "Biljard",
    url: "http://www.billiardroom.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1626890631686-0b3113188c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Airhockey Arena",
    address: "Sveavägen 15, Malmö",
    foodType: "Snabbmat",
    activityType: "Airhockey",
    url: "http://www.airhockeyarena.se",
    openingHours: "Mån-Fre 14-22, Lör-Sön 10-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1593349480785-6ba0825f57f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Lasertag Center",
    address: "Drottninggatan 8, Uppsala",
    foodType: "Pizza",
    activityType: "Lasertag",
    url: "http://www.lasertagcenter.se",
    openingHours: "Mån-Fre 15-22, Lör-Sön 12-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1514313122851-5167c4fca5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Bowl & Bite",
    address: "Sturegatan 2, Örebro",
    foodType: "Burgare",
    activityType: "Bowling",
    url: "http://www.bowl-bite.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1545062080-a71640ea75a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlsbGlhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Klubb Spelrum",
    address: "Birger Jarlsgatan 7, Norrköping",
    foodType: "Gourmetpizzor",
    activityType: "Biljard",
    url: "http://www.spelrum.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1650916010290-faa4988c56d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Luftish",
    address: "Hornsgatan 42, Stockholm",
    foodType: "Vegansk",
    activityType: "Airhockey",
    url: "http://www.luftish.se",
    openingHours: "Mån-Fre 14-22, Lör-Sön 10-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1582008558029-34f157a939b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Krog & Lek",
    address: "Södra Strandgatan 7, Helsingborg",
    foodType: "Fisk & skaldjur",
    activityType: "Lasertag",
    url: "http://www.krog-och-lek.se",
    openingHours: "Mån-Fre 15-22, Lör-Sön 12-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1553190920-a9c7432283e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1279&q=80",
    name: "Bowlinghallen",
    address: "Klostergatan 12, Lund",
    foodType: "Kebab",
    activityType: "Bowling",
    url: "http://www.bowlinghallen.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1556340006-ffa792cc226a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Spelkaféet",
    address: "Södergatan 20, Halmstad",
    foodType: "Fika",
    activityType: "Biljard",
    url: "http://www.spelkafeet.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },
];
const restaurants = {};
