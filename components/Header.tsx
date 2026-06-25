
import React from 'react'

const Header = () => {
  return (
   <header className="border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <h2 className="text-xl font-bold">
          JSONCraft
        </h2>
          {/* todo mai theam dark and light */}
        <button className="cursor-pointer">
          🌙
        </button>

</div>
   </header>
  )
}

export default Header