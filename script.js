const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const x = document.getElementById("search");
const getuser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    console.table(data);
    const card = `
    <div class="card">
    <a href = ${data.html_url} target = __blank><img class="avatar" src="${data.avatar_url}"></a>
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
      
    </div>
</div>
</div>  
    `
    getrepo(username);
    main.innerHTML = card;
}

const getrepo = async(username) => {
    const response = await fetch(APIURL + username + "/repos?created=sorted");
    const data = await response.json();
    console.log(data);
    const repos = document.getElementById("repos");
    var temp = ``;
    for(let i = 0;i<3;++i){
        temp +=  `<a class="repo" href="${data[i].html_url}" target="_blank">${data[i].name}</a>`
}
    repos.innerHTML = temp;
    console.log(data);
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

