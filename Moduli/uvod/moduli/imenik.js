import {Osoba} from "./osoba.js";
import fs from "fs";



export class Imenik {
    constructor(){
        this.osobe = [];
    }
    dodajOsobu(ime,prezime,telefon,email){
        const novaOsoba = new Osoba(ime,prezime,telefon,email);
        this.osobe.push(novaOsoba);

        }
        prikaziImenik(){
        console.log("Telefonski imenik");
        for (const osoba of this.osobe){

            osoba.prikaziDetalje();
            }
    }
    snimiImenik(imeFajla){
        const imenikJSON = JSON.stringify(this.osobe,null,2);
        fs.writeFileSync(imeFajla,imenikJSON);
        console.log("Imenik je snimljen u fajl:" + imeFajla);

    }

}

