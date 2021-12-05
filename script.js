function carregarPerfil() {
    let xhr = new XMLHttpRequest()

    xhr.onload = function () {        

        let data = JSON.parse(this.responseText)

        let perfilStr = `<div class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
                            <img class="img_perfil" src="https://avatars.githubusercontent.com/u/38895071?v=4" alt="">                           
                        </div>
                        <div id="perfil" class="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-9">
                        <a href="${data.html_url}"><h3 class="principal">${data.name}</h3></a> 
                            <p>${data.location}</p>
                            <p class="princial"><b>Seguidores:</b> ${data.followers}</p>
                            <p class="princial"><b>Seguindo:</b> ${data.following}</p>

                            <h4 class="pt-4">Redes Sociais</h4>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href=""><i class="fa fa-instagram"></i></a>
                        </div>`;
        
        document.getElementById('perfil').innerHTML = perfilStr;
    }

    xhr.open('GET', 'https://api.github.com/users/Emanuellvr');
    xhr.send();
}

function carregarRepo() {
    let xhr = new XMLHttpRequest()

    xhr.onload = function () {        

        let data = JSON.parse(this.responseText)
        
        reposString = `<div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <i class="fa fa-folder fa-2x"></i>
                            <a id="a1" href="${data[0].html_url}"><h5 style="display: inline-block">${data[0].name}</h5></a>
                            <p>${data[0].description}</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <i class="fa fa-folder fa-2x"></i>
                            <a id="a2" href="${data[1].html_url}"><h5 style="display: inline-block">${data[1].name}</h5></a>
                            <p>${data[1].description}</p>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <i class="fa fa-folder fa-2x"></i>
                            <a id="a3" href="${data[3].html_url}"><h5 style="display: inline-block">${data[3].name}</h5></a>
                            <p>${data[3].description}</p>
                        </div>`;
        console.log(data.html_url)
        
        document.getElementById('repos').innerHTML = reposString;
    }

    xhr.open('GET', 'https://api.github.com/users/Emanuellvr/repos');
    xhr.send();
}
