//alert('Olá!')
function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = window.document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    //res.innerHTML = `Idade calculada: ${idade} anos de idade!`
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 15) {
        //Crança
        img.setAttribute("src", "img/garoto.png");
      } else if (idade < 30) {
        //Jovem
        img.setAttribute("src", "img/homemJovem.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img/homemMeiaIdade1.png");
      } else {
        //Idoso
        img.setAttribute("src", "img/homemIdoso.png");
      }
    } else {
      genero = "mulher";
      if (idade >= 0 && idade < 15) {
        //Crança
        img.setAttribute("src", "img/garota.png");
      } else if (idade < 30) {
        //Jovem
        img.setAttribute("src", "img/mulherJovem.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "img/mulherMeiaIdade.png");
      } else {
        //Idoso
        img.setAttribute("src", "img/mulherIdosa.png");
      }
    }
    res.innerHTML = `Detectado ${genero} de ${idade} anos!`;

    res.appendChild(img);
  }
}
