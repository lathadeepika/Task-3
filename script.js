// Image Carousel
let images = [
  "https://picsum.photos/800/300?1",
  "https://picsum.photos/800/300?2",
  "https://picsum.photos/800/300?3"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[index];
}


// Booking Form Calculation
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let roomPrice = document.getElementById("room").value;
  let checkin = new Date(document.getElementById("checkin").value);
  let checkout = new Date(document.getElementById("checkout").value);

  let days = (checkout - checkin) / (1000 * 60 * 60 * 24);

  let totalCost = days * roomPrice;

  document.getElementById("total").innerText =
    "Total Cost: ₹" + totalCost;
});


// Fetch API (Travel Joke)
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " - " + data.punchline;
    })
    .catch(error => console.log(error));
}