const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const x = document.getElementById("search");
const getuser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    console.log(data);
    const card = `
    <div class="card"> 
    <img class="avatar" src="${data.avatar_url}">
</div>
    <div class="user-info">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>

    <div class="info">
        <p><strong> ${data.followers} Followers</strong></p>
        <p><strong> ${data.following} Following</strong></p>
        <p><strong> ${data.public_repos} Repos</strong></p>
     </div>

    <div id="repos">
        <a class="repo" href="${data.repos_url}" target="_blank">Repo1</a>
        <a class="repo" href="#" target="_blank">Repo2</a>
        <a class="repo" href="#" target="_blank">Repo3</a>
        <a class="repo" href="#" target="_blank">Repo4</a>
        <a class="repo" href="#" target="_blank">Repo5</a>
    </div>
</div>
</div>  
    `

    main.innerHTML = card;
}

x.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getuser(x.value);
    }
  });


  const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click' , () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

