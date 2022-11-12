import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'

const ProductDetailsView = () => {
    const params = useParams() 

    return (
    <>
        <MainMenuSection />

        <div className="container mt-5">
            <h1>{params.name}</h1>
            <img src={params.imageName}/>
        </div>
        <ProductDetailsSection />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView