import ProductCard from './ProductCard'

function ProductList({ products, addToCart }) {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
            Product List
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Choose your favorites</h2>
        </div>
        <p className="text-sm text-stone-400">{products.length} items</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
