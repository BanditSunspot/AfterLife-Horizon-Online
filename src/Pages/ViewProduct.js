import React from "react";
import { useParams } from "react-router-dom";
import { SearchProductDetails } from "../Components/ProductsManager";
import { BannerConstruct } from "../Components/Banner";
import { FooterConstruct } from "../Components/Footer";

export function ViewProduct(){
  const Product = useParams();

  let ProductDetails = SearchProductDetails(parseInt(Product.Id));
  return(
    <>
        {BannerConstruct(`Product Id: ${ProductDetails.id}, Name: ${ProductDetails.name}`)}
        {FooterConstruct()}
    </>
  )
}