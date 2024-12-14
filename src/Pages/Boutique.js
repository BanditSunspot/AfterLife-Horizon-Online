import { BannerConstruct } from "../Components/Banner";
import { ProductsArea } from "../Components/ProductsManager";
import { FooterConstruct } from "../Components/Footer";

export function Boutique(){
    return(
        <>
            {BannerConstruct("Boutique")}
            {ProductsArea()}
            {FooterConstruct()}
        </>
    )
}