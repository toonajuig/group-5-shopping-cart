import CartItem from './CartItem'
import CartSummary from './CartSummary'

function Cart({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
            Your Cart
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Order summary</h2>
        </div>
        <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-stone-300">
          {cartItems.length} products
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-stone-900/60 px-5 py-12 text-center text-stone-300">
          Your cart is empty
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))}
        </div>
      )}

      <CartSummary cartItems={cartItems} />
    </aside>
  )
}

export default Cart
