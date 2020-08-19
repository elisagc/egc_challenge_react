import React, { useEffect, useState } from 'react'
import { dataImages } from '../assets/data/dataImages'

const Ficha = (props) => {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    if (props.lang.match(/e./g)) {
      let [lang] = props.lang.match(/e./g)
      setLang(lang)
    } else {
      setLang('es')
    }
  }, [props])

  return (
    <div className="img-container">
      {dataImages.map((data) => (
        <div className={`item item-${data.id}`} key={data.id}>
          <img src={data.img} alt="" />

          {
            <div className="info">
              {lang === 'es' ? (
                <>
                  <h1>{data.es.title.toUpperCase()}</h1>
                  <p>{data.es.description.toUpperCase()}</p>
                </>
              ) : (
                <>
                  <h1>{data.en.title.toUpperCase()}</h1>
                  <p>{data.en.description.toUpperCase()}</p>
                </>
              )}
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default Ficha
