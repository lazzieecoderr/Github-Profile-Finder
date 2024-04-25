// Getting all the html elements
const userInput = document.getElementById("username");
const getDetailsButton = document.getElementById("getDetails");
const profile = document.getElementById("profile");
const repo = document.getElementById("repo");

//getting username from input and using async function to fetch the details from github
getDetailsButton.addEventListener("click", async () => {
  const userName = userInput.value;
  //console.log(userName);
  //using the github api to fetch the profile details from the server
  //since we are going to fetch from api we are changing to async function and will be using await keyword to handle promise
  const res = await fetch(`https://api.github.com/users/${userName}`);
  //since it will be in readable stream we are using .json
  const data = await res.json();
  //console.log(data);
  getProfile(data);
});

//displaying the profile details after getting the username
function getProfile(data) {
  //console.log(data);
  //displaying the profile details in the card
  profile.innerHTML = `
  <div class="card">
  <div class="card-img">
  <img src=${data.avatar_url} alt=${data.name}>
  </div>
 <div class="card-body">
 <div class="card-title">${data.name}</div>
 <div class="card-subHeading">${data.login}</div>
 <div class="card-text">
  <p>${data.bio} </p>
  <p><i class="fa-solid fa-user-group"></i> ${data.followers} Followers . ${data.following} Following </p>
  <p><i class="fa-solid fa-location-dot"></i> ${data.location} </p>
  <button>
  <a href=${data.html_url} target="_blank">Visit Profile </a>
  </button>
 </div>
 </div>
 </div> 
  `;
}
