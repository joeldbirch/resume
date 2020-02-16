import React from 'react'

export default ({text=``}) => {
  const paras = text.split(`\n\n`)
  console.log(paras);

  return paras.map((para, index) => (
    <p
      className={`${index===0 ? `` : `mt-6`}`}
      dangerouslySetInnerHTML={{__html: para}}
    />
  ))
}
