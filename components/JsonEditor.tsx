import React from 'react'
import { Textarea } from './ui/textarea'

const JsonEditor = () => {
  return (
    <Textarea 
    placeholder="Paste your JSON here..."
    className="w-full h-112.5 rounded=xl bg-slate-900 p-5 border border-slate-700 outline-none"
    >

    </Textarea>
  )
}

export default JsonEditor