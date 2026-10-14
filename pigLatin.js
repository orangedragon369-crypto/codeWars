//translates to pig latin
function pigIt(str){
  let ans = []
  str = str.split(" ");
  str.map((word)=>{
    const regex = /\p{P}/u;
    if (regex.test(word))ans.push(word)
    else {
        let latin = `${word.slice(1)}${word[0]}ay`
        ans.push(latin);
    }
    
  })
  return ans.join(" ")
}

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')