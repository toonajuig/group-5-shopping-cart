import { useState } from 'react'
import Header from './components/layout/Header'
import ShoppingCartPage from './pages/ShoppingCartPage'

const products = [
  {
    id: 1,
    name: 'Classic White Tee',
    price: 390,
    category: 'Basics',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Canvas Tote Bag',
    price: 520,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Minimal Sneakers',
    price: 1290,
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Everyday Cap',
    price: 320,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80',
  },
]

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  const increaseQty = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQty = (productId) => {
    setCartItems((currentItems) =>
      currentItems.reduce((nextItems, item) => {
        if (item.id !== productId) {
          nextItems.push(item)
          return nextItems
        }

        if (item.quantity > 1) {
          nextItems.push({ ...item, quantity: item.quantity - 1 })
        }

        return nextItems
      }, []),
    )
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Header cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <ShoppingCartPage
        products={products}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    </div>
  )
}

export default App
