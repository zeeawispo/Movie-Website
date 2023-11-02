const shows = [
    {
        title: "Stranger Things",
        image: "./images/stranger.png",
        description: "A group of young friends from the fictional town of Hawkins, Indiana, battles supernatural forces and a secret government lab.",
    },
    {
        title: "The Crown",
        image: "./images/crown.png",
        description: "The political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    },
    {
        title: "Breaking Bad",
        image: "./images/BED.png",
        description: "A high school chemistry teacher turned methamphetamine producer partners with a former student, leading to dangerous consequences.",
    },
    {
        title: "Game of Thrones",
        image: "./images/games.png",
        description: "Noble families vie for control of the Iron Throne in a mythical land filled with dragons, magic, and political intrigue.",
    },
    {
        title: "Friends",
        image: "./images/friends.png",
        description: "Follows the lives of six friends living in Manhattan as they navigate relationships, work, and personal growth.",
    },
    {
        title: "Black Mirror",
        image: "./images/black.png",
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    },
    {
        title: "The Office",
        image: "./images/office.png",
        description: "A mockumentary-style sitcom depicting the everyday work lives of office employees at the Dunder Mifflin Paper Company.",
    },
];

const showContainer = document.getElementById("show-container");

function renderShows() {
    shows.forEach((show) => {
        const showCard = document.createElement("div");
        showCard.classList.add("show-card", "col-md-4");
        showCard.innerHTML = `
            <div class="image-container">
                <img src="${show.image}" alt="${show.title}" class="show-image" style="
                width: 100%;
                height: 300px;">
            </div>
            <h3>${show.title}</h3>
            <p>${show.description}</p>
        `;
        showContainer.appendChild(showCard);
    });
}

renderShows();
