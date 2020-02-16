import React from 'react'

export default ({text=``}) => {
  const paras = text.split(`\n\n`)
  return paras.map((para, index) => <p className={`${index===0 ? `` : `mt-6`}`}>{para}</p>)
}
