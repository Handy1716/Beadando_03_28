import { useState } from "react";
import { Button } from "react-bootstrap";



export default function Idopont() {

    const [visible, Setvisible] = useState<string>("");
    function kattintas(){
        Setvisible("Köszönjük a megkeresést!")
    }
    return(
        <form action="Tapasztalat">
            <label htmlFor="nev">Név</label><input type="text" id="nev" name="fav_language" value=""/> <br />
            <label htmlFor="nev">Rendezvény dátuma</label>
            <input type="date" id="nev" name="fav_language" value=""/> <br />
            <label htmlFor="nev">Leírás</label>
            <textarea name="nev"></textarea>
            <div><Button onClick={kattintas}>Küldés</Button></div>
            <div>{visible}</div>
            
        </form>
    )
}