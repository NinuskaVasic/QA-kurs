import {Imenik} from "./moduli/imenik.js";

const imenik = new Imenik ();
imenik.dodajOsobu("Alice",  "Smith", " 555-1234","alices@gmail.com");
imenik.dodajOsobu("Bob","Buttons","555-2525","bobb@gmail.com");
imenik.dodajOsobu("Jonh","Doe","555-0101","jonhd@gmail.com");
imenik.prikaziImenik();
imenik.snimiImenik( "imenik.json");


