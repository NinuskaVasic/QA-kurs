 export class Osoba{
    constructor(ime,prezime,telefon,email) {
        this.ime = ime;
        this.prezime = prezime;
        this.telefon = telefon;
        this.email = email;
    }
    prikaziDetalje() {
        console.log("Ime :" + (this.ime) + (this.prezime) + "Telefon:" + (this.telefon) + (this.email));
    }


}
