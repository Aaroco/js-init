//const guess = Math.floor(Math.random()*10)
const guess = 6
parseInt(guess)
const nombre = prompt('saisissez un nombre entre 0 et 10 ?')
parseInt(nombre)
{
  if (nombre>guess) 
  {
   console.log("-")
  }

  else if (nombre<guess) 
  {
    console.log("+")
  }
  else 
  {
    console.log("bravo")
  }
}
