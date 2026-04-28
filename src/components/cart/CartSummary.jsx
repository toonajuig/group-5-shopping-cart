function CartSummary({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <section className="mt-6 rounded-2xl bg-amber-400 p-5 text-stone-950">
      <div className="flex items-center justify-between text-sm">
        <span>Total items</span>
        <span className="font-semibold">{totalItems}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-lg">
        <span className="font-medium">Total price</span>
        <span className="text-2xl font-bold">฿{totalPrice}</span>
      </div>
      <button
        type="button"
        className="mt-5 w-full rounded-2xl bg-stone-950 px-4 py-3 font-semibold text-white transition hover:bg-stone-800"
      >
        Checkout
      </button>
    </section>
  )
}

export default CartSummary
