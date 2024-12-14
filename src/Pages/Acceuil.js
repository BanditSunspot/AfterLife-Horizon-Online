import { BannerConstruct } from "../Components/Banner";
import { EvenementsConstruct } from "../Components/EvenementsManager";
import { FooterConstruct } from "../Components/Footer";

export function Acceuil(){
    return(
        <>
            {BannerConstruct("Acceuil")}
            {EvenementsConstruct()}
            {FooterConstruct()}
        </>
    )
}