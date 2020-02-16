import React from 'react';

const Summary = ({ data }) => {
  const paras = data.split(`\n\n`)
  return (
    <section className="py-5 border-b border-neutral-300 lg:flex">
      <div className="my-5">
        <img
          className="mx-auto w-32 lg:w-full xl:w-4/5"
          src="./profile.jpg"
          alt="profile"
          style={{
            transform: `scalex(-1)`,
            borderRadius: `100%`,
          }}
        />
      </div>
      <p className="tracking-wide leading-relaxed lg:mx-8 lg:text-lg">
        {paras?.map(para => <p className="my-6">{para}</p>)}
      </p>
    </section>
  )
}


export default Summary;
