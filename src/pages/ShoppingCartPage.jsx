import Cart from '../components/cart/Cart'
import ProductList from '../components/products/ProductList'

function ShoppingCartPage({
  products,
  cartItems,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-97px)] max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.35fr_0.9fr] lg:px-8">
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    </main>
  )
}

export default ShoppingCartPage
