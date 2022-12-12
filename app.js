const bg = document.querySelector("#container");
const btn = document.querySelector("#mybtn");
const txt = document.querySelector("#print");



var colorArray =[

    "#FF6700", "#49413F", "#804A00","#4863A0", "#FF8674", "#FF4500", "#C24641", "#A70D2A",
    "#550A35", "#660000", "#7F525D", "#E759AC", "#583759", "#6C2DC7", "#8D38C9", "#2B547E",
    "#123456", "#CB6D51", "#0020C2", "#0041C2", "#2B65EC", "#157DEC", "#00BFFF", "#00BFFF"
    ]
    function randomColor(){
        return  Math.round(Math.random()*colorArray.length);

    }
    btn.addEventListener("click", myFunction)

    function myFunction() {
        let text =colorArray.length;
        txt.innerHTML = `HexaCode Color :${colorArray[randomColor()]}` ;
        bg.style.backgroundColor =colorArray[randomColor()];
        btn.style.backgroundColor =colorArray[randomColor()];
      }
   