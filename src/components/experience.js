import React from 'react'
import Paras from './paras'

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <div className="py-6 leading-relaxed tracking-wide">
            <Paras text={item.description}/>
          </div>
        </article>
      ))}
  </section>
)

export default Experience
