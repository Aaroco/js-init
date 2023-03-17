const guess = 45
parseInt(guess)
const nombre = prompt('saisissez un nombre entre 0 et 10 ?')
parseInt(nombre)
{
  if (nombre>guess) 
 {
    for (let i=nombre;i>=guess; i--)
    {
        console.log (i)
    }
 }
 
 else if (nombre<10) 
 {
    for (let i=nombre;i<=guess; i++)
    {
        console.log (i)
    }
 }
}

