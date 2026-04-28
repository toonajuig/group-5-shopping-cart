function CartItem({ item, removeFromCart, increaseQty, decreaseQty }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-stone-900/70 p-4">
      <div className="flex items-start gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-20 w-20 rounded-2xl object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="truncate text-base font-semibold text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-stone-400">{item.category}</p>
            </div>
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="text-sm font-medium text-rose-300 transition hover:text-rose-200"
            >
              Remove
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
              <button
                type="button"
                onClick={() => decreaseQty(item.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20"
              >
                -
              </button>
              <span className="w-8 text-center text-sm font-semibold text-white">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => increaseQty(item.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-lg font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                +
              </button>
            </div>
            <p className="text-base font-bold text-amber-200">
              ฿{item.price * item.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
