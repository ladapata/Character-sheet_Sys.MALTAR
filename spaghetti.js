function rollDice(dice) {
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
}