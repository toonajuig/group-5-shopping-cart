function ProductCard({ product, addToCart }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-amber-300">{product.category}</p>
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          </div>
          <p className="text-lg font-bold text-amber-200">฿{product.price}</p>
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="w-full rounded-2xl bg-amber-400 px-4 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
