// education array of objects

let team = [
    {
      id: 1,
      image: "https://i.postimg.cc/kg54X1N1/C12-C1-Sidwell-Batyi-2.jpg",
      name: "Sidwell Batyi AKA AV",
      role: "Owner of nothing  / Private Investor / Delivery Guy",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/7LgrrW7F/C12-Timothy-Barry-1.jpg",
      name: "Timothy Barry AKA T Money",
      role: "Looter / Maid",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/YCj8KLcY/C12-C-1-Lyle-Brown-2.jpg",
      name: "Lyle Brown AKA Koppe",
      role: "Sweeper's Brother (same daddy different mommy)",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/Njdr7d5w/c12-marcel-brown-1.jpg",
      name: "Marcel Brown AKA TINY",
      role: "Sweeper (Oslin's my daddy)",
    },
    {
      id: 5,
      image: "https://i.ibb.co/CtmZ2t9/IMG-20230428-WA0009.jpg",
      name: "Xola Bangaza AKA Banger",
      role: "CEO",
    },
    {
        id: 6,
        image: "https://i.postimg.cc/HWJDpnQ0/IMG-2239.jpg",
        name: "Ridhaa Gabier AKA Piele",
        role: "Security Guard",
      },
      {
        id: 7,
        image: "https://i.postimg.cc/4NbcnfGy/C12-Olwethu-Bhiya-2.jpg",
        name: "Olwethu Bhiya AKA John Doe ",
        role: "Hitman",
      },
      {
        id: 8,
        image: "https://i.postimg.cc/28vwGNDN/IMG-2409-2.jpg",
        name: "Zulaigah Benjamin aka zu lui gat",
        role: "Finance Manager / Cleaner ",
      },
  ];
  
  let myTeam = document.querySelector(".team");
  team.forEach((data) => {
    myTeam.innerHTML += `
    <div class="col-4">
      <div class= "card">
         <div class="images">
             <img src="${data.image}" loading="lazy" class="img-fluid">
             <br>
             <h3>${data.name}</h3>
             <br>
         </div>
    <p class="price">${data.role}</p>
    <br>
    </div>
   </div>
   `
  });
