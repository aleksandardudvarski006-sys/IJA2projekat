let bendovi = [
    "Slipknot",
    "Korn",
    "Linkin Park",
    "Deftones",
    "System Of A Down"
];

function prikaziBendove(niz){

    let tekst = "";

   
    for(let i = 0; i < niz.length; i++){
        tekst += niz[i] + "<br>";
    }

    return tekst;
}

function proveriAlbum(ocena){

    // KONTROLNA STRUKTURA
    if(ocena >= 8){
        return "Odličan album!";
    }
    else{
        return "Album je prosečan.";
    }
}

function ucitajBendove(){

    let rezultat = document.getElementById("rezultat");

    rezultat.innerHTML = prikaziBendove(bendovi);

    rezultat.style.color = "lightgreen";
}

function oceniAlbum(){

    let ocena = document.getElementById("ocena").value;

    let poruka = proveriAlbum(ocena);

    document.getElementById("albumRezultat").innerHTML = poruka;
}

function posaljiFormu(){

    let ime = document.getElementById("ime").value;
    let omiljeniBend = document.getElementById("bend").value;
    let komentar = document.getElementById("komentar").value;

let velikoIme = ime.toUpperCase();
    let duzinaKomentara = komentar.length;

    let ispis = "Fan: " + velikoIme + "<br>";
    ispis += "Omiljeni bend: " + omiljeniBend + "<br>";
    ispis += "Broj karaktera komentara: " + duzinaKomentara;

    document.getElementById("ispisForme").innerHTML = ispis;

    return false;
}

function dodajAlbum(){

    let noviAlbum = document.getElementById("noviAlbum").value;

    let albumi = [
        "Hybrid Theory",
        "Iowa",
        "Follow The Leader"
    ];

    albumi.push(noviAlbum);

    albumi.sort();

    let tekst = "";

    for(let i = 0; i < albumi.length; i++){
        tekst += "<li>" + albumi[i] + "</li>";
    }
document.getElementById("lista").innerHTML = tekst;
}

function promeniTemu(){

    document.body.classList.toggle("tamnaTema");
}
