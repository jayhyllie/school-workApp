
const restaurants = [
    {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Il Tavolo",
        adress: "Storgatan 12, 123 45 Stockholm",
        foodType: "Italiensk",
        url: "https://tavolo.se/",
        openingHours: "Mån-Sön 11:00-23:00"
    },
    {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Bastard's BBQ",
        adress: "Parkvägen 7, 543 21 Göteborg",
        foodType: "Amerikansk",
        url: "https://bbqsteakhouse.se/",
        openingHours: "Mån-Fre 11:00-22:00, Lör-Sön 11:00-23:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Qiao Mei",
        adress: "Strandgatan 4, 456 78 Malmö",
        foodType: "Kinesisk",
        url: "http://lai-wa.se/",
        openingHours: "Mån-Sön 12:00-22:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "El Diablo del Taco",
        adress: "Södra Kyrkogatan 2, 987 65 Uppsala",
        foodType: "Mexikansk",
        url: "https://tacobar.se/",
        openingHours: "Mån-Sön 11:00-23:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Thai House",
        adress: "Norra Vägen 14, 654 32 Västerås",
        foodType: "Thailändsk",
        url: "http://thaihousevasa.se/",
        openingHours: "Mån-Sön 11:30-22:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "La Bise",
        adress: "Hamngatan 8, 321 09 Sundsvall",
        foodType: "Fransk",
        url: "https://bise.se/",
        openingHours: "Mån-Sön 18:00-23:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Bombay",
        adress: "Östra Storgatan 20, 567 89 Linköping",
        foodType: "Indisk",
        url: "http://jarntorget.restaurangbombay.se/",
        openingHours: "Mån-Sön 12:00-22:30"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Papadopoulos Grill&Salladsbar",
        adress: "Kungsgatan 3, 890 12 Örnsköldsvik",
        foodType: "Grekisk",
        url: "https://restaurangathena.se/",
        openingHours: "Mån-Sön 11:00-23:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Mammas Sushi",
        adress: "Södergatan 16, 234 56 Helsingborg",
        foodType: "Japansk",
        url: "http://www.sushikaze.se/",
        openingHours: "Mån-Sön 11:30-22:00"
      },
      {
        imgUrl: "https://source.unsplash.com/random/800x600/?restaurant",
        name: "Gunnar's",
        adress: "Köpmangatan 5, 789 01 Jönköping",
        foodType: "Svensk",
        url: "https://www.gunnarskok.se/",
        openingHours: "Mån-Sön 11:00-21:00"
      }
]

const activityFoodPlaces = [
  {
    imgUrl: "https://images.unsplash.com/photo-1602058450186-538e6a957aec",
    name: "Bowl-o-rama",
    address: "Kungsgatan 10, Stockholm",
    foodType: "Amerikansk",
    activityType: "Bowling",
    url: "http://www.bowl-o-rama.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1616558226147-04736a8d073e",
    name: "The Billiard Room",
    address: "Storgatan 12, Göteborg",
    foodType: "Pubmat",
    activityType: "Biljard",
    url: "http://www.billiardroom.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1563986768621-39f8c4ad57cb",
    name: "Airhockey Arena",
    address: "Sveavägen 15, Malmö",
    foodType: "Snabbmat",
    activityType: "Airhockey",
    url: "http://www.airhockeyarena.se",
    openingHours: "Mån-Fre 14-22, Lör-Sön 10-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1560829721-5152ade7e9b6",
    name: "Lasertag Center",
    address: "Drottninggatan 8, Uppsala",
    foodType: "Pizza",
    activityType: "Lasertag",
    url: "http://www.lasertagcenter.se",
    openingHours: "Mån-Fre 15-22, Lör-Sön 12-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1534790566856-8d80cf4e6d4b",
    name: "Bowl & Bite",
    address: "Sturegatan 2, Örebro",
    foodType: "Burgare",
    activityType: "Bowling",
    url: "http://www.bowl-bite.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1528483118903-8e7a3f8b3d7e",
    name: "Klubb Spelrum",
    address: "Birger Jarlsgatan 7, Norrköping",
    foodType: "Gourmetpizzor",
    activityType: "Biljard",
    url: "http://www.spelrum.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1500543546334-2f53a3a04375",
    name: "Luftish",
    address: "Hornsgatan 42, Stockholm",
    foodType: "Vegansk",
    activityType: "Airhockey",
    url: "http://www.luftish.se",
    openingHours: "Mån-Fre 14-22, Lör-Sön 10-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1550511025-021fa49f84f1",
    name: "Krog & Lek",
    address: "Södra Strandgatan 7, Helsingborg",
    foodType: "Fisk & skaldjur",
    activityType: "Lasertag",
    url: "http://www.krog-och-lek.se",
    openingHours: "Mån-Fre 15-22, Lör-Sön 12-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1569382297437-83a09d28fcd9",
    name: "Bowlinghallen",
    address: "Klostergatan 12, Lund",
    foodType: "Kebab",
    activityType: "Bowling",
    url: "http://www.bowlinghallen.se",
    openingHours: "Mån-Fre 12-22, Lör-Sön 10-23",
  },

  {
    imgUrl: "https://images.unsplash.com/photo-1559828435-6fc9460cb05e",
    name: "Spelkaféet",
    address: "Södergatan 20, Halmstad",
    foodType: "Fika",
    activityType: "Biljard",
    url: "http://www.spelkafeet.se",
    openingHours: "Mån-Fre 16-01, Lör-Sön 12-01",
  },
];

