function btnCalculer_onclick()
{
var prixBase, age;

    prixBase = parseInt(document.getElementById("txtBasePrix").value);
    age = parseInt(document.getElementById("txtAge").value);

    if (age <= 16)
    {
        if (document.getElementById("radMidi").checked == true)
        {
            prixBase = prixBase*0.4;
        }
        else
        {
            prixBase = prixBase*0.6;
        }
    }
    else if (age >16)
    {
        if(document.getElementById("radMidi") .checked == true)
        {
            prixBase = prixBase*0.7;
        }
    }

    alert("Le prix est de " +prixBase);

}