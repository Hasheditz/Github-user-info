const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
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
    <p>${data.company}</p>

    <div class="info">
        <p>${data.followers}<strong>Followers</strong></p>
        <p>${data.following}<strong>Following</strong></p>
        <p>${data.public_repos}<strong>Repos</strong></p>
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

getuser("getlost01")