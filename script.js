/*function rollDice(dice) {
    let [count, max] = dice.split('d')
  
    if (Number(count) && Number(max)) {
      count = Number(count)
      max = Number(max)
  
      let total = 0
  
      for (let i = 0; i < count; i++) {
        total += Math.floor(Math.random() * max + 1)
      }
  
      return total
    } else {
      return null
    }
  }


  function rollAtribute(atribute, amount) {
    console.log(this)
  
    diceModal.css('display', 'block')
  
    setTimeout(() => {
      $('.modalDice').css('transform', 'rotate(360deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    setTimeout(() => {
      const diceNumber = rollDice('1d20')
      const diceType = calcDice(amount, diceNumber)
      $('#diceNumber').text(diceNumber)
      $('#diceType').text(diceType)
  
      setTimeout(() => {
        diceModal.css('display', 'none')
        $('#diceNumber').text('')
        $('#diceType').text('')
  
        $('.modalDice').css('transform', 'rotate(0deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
      }, 20000)
    }, 2000)
  }






public class SalvaPersonagem () {
  this.racaChar
}*/





function savehtml() {
  var htm = document.body.appendChild(
      document.createElement("htm")
  );
  htm.download = "demo.txt";
  htm.href = "data:text/plain," + document.getElementById("fileDisplayArea").innerHTML;
  htm.click();
}

function saveDynamicDataToFile() {
  var userInput = document.getElementById("myText").value;
  var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "dynamic.txt");
}


/*aparecer e desaparecer o mestiço CONFIGURAÇÕES*/
function Aparatar() {
  document.getElementsByClassName("halfbreed").style.display = "block";
}
function Desaparatar() {
  document.getElementsByClassName("halfbreed").style.display = "none";
}
/*copiar as rolagens*/
function copiar_pub() {
  var copyText = document.getElementById("resultado_publico");
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value);
  alert("Rolagem pública=>" + copytext.value + ", basta colá-la no chat do Roll20");}
function copiar_gmr() {
  var copyText = document.getElementById("resultado_gmroll");
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value);
  alert("Rolagem privada==>" + copytext.value + ", basta colá-la no chat do Roll20");}