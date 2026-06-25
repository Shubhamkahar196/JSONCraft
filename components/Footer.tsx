import { footer } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-50">
        <div className="max-x-7xl mx-auto py-8 text-center">

            <p>Made by Shubham kahar</p>
            <p>shubhamkahar196@gmail.com</p>
            <a
          href="https://digitalheroesco.com"
          target="_blank"
          className="inline-block mt-4 bg-blue-600 px-5 py-2 rounded-lg"
        >
          Built for Digital Heroes
        </a>
        </div>
    </footer>
  )
}

export default Footer