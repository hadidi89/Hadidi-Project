import React from 'react'

const ProductDetailsSection = ({product= []}) => {
  return (
    <section className='product-details'>
        <div className='containar'>
            <div>
                <div>{product.name}</div>
                <img src={product.imageName}/>
            </div>
        </div>
    </section>
  )
}

export default ProductDetailsSection