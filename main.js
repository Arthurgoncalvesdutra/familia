var manga=["https://img.freepik.com/fotos-gratis/silhueta-de-familia-feliz-na-sunset_1303-22466.jpg?w=2000",
          "https://img.freepik.com/vetores-premium/desenhos-animados-menino-engracado-em-pe_29190-6993.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5BAidjDzxwbpEfJ7XYBKYnMxx3Ir0Wug0w&usqp=CAU",
         "https://w7.pngwing.com/pngs/732/6/png-transparent-drawing-woman-woman-face-black-hair-people.png",
          "https://img.freepik.com/vetores-premium/homem-barbudo-tem-smartphone-nas-maos-pessoas-e-dispositivos-usando-o-aplicativo-no-telefone_165429-944.jpg?w=2000",
          "https://aulifepet.com.br/wp-content/uploads/2018/08/Foto-84-1200x800.jpg",
           "https://cdn2.solojavirtual.com/loja/arquivos_loja/30154/Fotos/thumbs3/produto_Foto1_7002643.jpg?cache=",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0Wgr1wNu7OnnJkaChHlFerDPiZMy0vMnnQ&usqp=CAU"];

          var maça=["minha familia",
          "Arthur",
          "Elisa",
         "Camila",
          "Rhaliçom",
          "Tina",
           "Raya",
          "Spike"];

var i=0;
function voar(){
  if(i==10){i=0;}
  document.getElementById("corre").src=manga[i];
  document.getElementById("mamaco").innerHTML=maça[i];
  i++;
}