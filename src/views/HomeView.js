import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {

  window.top.document.title = 'Fixxo.'


  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/13991658/pexels-photo-13991658.jpeg?auto=compress&cs=tinysrgb&w=255&h=750&dpr=2" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/11928245/pexels-photo-11928245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/13834131/pexels-photo-13834131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/9969158/pexels-photo-9969158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ])
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/13991658/pexels-photo-13991658.jpeg?auto=compress&cs=tinysrgb&w=255&h=750&dpr=2" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/11928245/pexels-photo-11928245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00",rating: 5, img: "https://images.pexels.com/photos/13834131/pexels-photo-13834131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection  title="Featured Products" products={featuredProducts} />
      <ProductGridSection  title="Top Products" products={topProducts} />
      <FooterSection />
    </>
  )
}

export default HomeView