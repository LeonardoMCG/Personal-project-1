function changeimage(id){
    var elemento = document.getElementById(id);
    var caminho = elemento.getAttribute("src");
    var imggrnd = document.getElementById("img4");
    if (id == "img4")
    {
        imggrnd.src = "assets/img/image1.png";
    }
    else
    {
    imggrnd.src = caminho;
    }
}
