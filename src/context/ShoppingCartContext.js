import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems ] = useState ([])

    const cartQuantity = cartItems.reduce(
        (quantity, product) => product.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber) => {
        return cartItems.find(product => product.articleNumber  === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItems) => {
        const {articleNumber, product} = cartItems

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items,{articleNumber, product, quantity: 1 }]

            }else { 
                return items.map(item => {
                    if ( item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItems) => {
        const {articleNumber} = cartItems

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)

            }else { 
                return items.map(item => {
                    if ( item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    const removeItem = (articleNumber) => {
        setCartItems(product => {
            return product.filter(product => product.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children} 
        <ShoppingCart/>

    </ShoppingCartContext.Provider>
}
