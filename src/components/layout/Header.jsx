function Header({ cartCount }) {
  return (
    <header className="border-b border-white/10 bg-stone-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Group 5
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white">Shopping Cart</h1>
        </div>
        <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100">
          Cart Items: {cartCount}
        </div>
      </div>
    </header>
  )
}

export default Header
