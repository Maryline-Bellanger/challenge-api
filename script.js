const btn = document.getElementById("btn");
const content = document.getElementById("content");

display();

btn.addEventListener("click", function(){
  console.log('cliqué');
  display();
})

async function display() {
  const responseJSON = await fetch('https://api.unsplash.com/photos/random/?client_id=706-FtXforVb6Loue3Wy2k7Tg3b_u6PQcHa50u6pk58');
  const responseJS = await responseJSON.json();

  content.innerHTML = `<div>
                        <img src=${responseJS.urls.small} alt='photos' />
                        <h2>${responseJS.user.name}</h2>
                        <a href=https://instagram.com/${responseJS.user.social.instagram_username}>
                        Je découvre sur instagram</a>
                        <p>${responseJS.user.bio ? responseJS.user.bio : "Il n'y a pas de biographie."}</p>
                      </div>`;
  
}