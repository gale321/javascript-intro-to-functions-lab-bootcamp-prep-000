 function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) { 
  
  if string === sayHiToGrandma(string.toUpperCase()){
    return "YES INDEED!"
    } else if string === sayHiToGrandma(string.lowerCase()){
      return "I can\'t hear you!"
        }else{
          return "I love you, too."
          }
    
}
}