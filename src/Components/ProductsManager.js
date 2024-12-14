import { Link } from "react-router-dom";

let ProductsCreate = false;
let count = 20;
const list = [];
const ProductsList = [];

export function ProductsArea(){
    return(
        <div>
            <div className="ProductsArea">
                {CreateProducts()}
            </div>
        </div>
    )
}

function CreateProducts(){
    if(ProductsCreate == false){
        for (let j = 0; j < count; j++){
            let item = {id: (j+1), name: "Produit"+(j+1)};
            list.push(item);
            ProductsList.push(<div className="Product" key={j}><Link to={`/ViewProduct/${item.id}`}><button className="Content"><h2 className="Name">Produit {j+1}</h2></button></Link></div>)
        }   
        ProductsCreate = true;
    }
    return ProductsList;
}

export function SearchProductDetails(productId){

    let item;

    list.forEach(product => {
        if(product.id === productId){
            item = product;
        }
    });

    return item;
}