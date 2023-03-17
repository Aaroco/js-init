const nombre = prompt('saisissez un nombre entre 0 et 10 ?')
parseInt(nombre)
{
 if (nombre>10) 
 {
    console.log("ERREUR")
 }
 
 else if (nombre<10) 
 {
    for (let i=nombre;i>=0; i--)
    {
        console.log (i)
    }
 }
}