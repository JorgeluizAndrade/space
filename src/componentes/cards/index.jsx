import React from 'react'
import open from './open.png'
import favorito from './favorito.png'


export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
          {itens.map((itens)=>{
            return(
              <li key={itens.id} className={styles.galeria__card}>
                <img src={itens.imagem} alt={itens.titulo} className= {styles.galeria__imagem} />
                <p className={styles.galeria__descricao}>{itens.titulo}</p>
                <div>
                  <p>{itens.creditos}</p>
                  <span>
                    <img src={favorito} alt="ícone coração para curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                  </span>
                </div>

              </li>
            )
          })}
        </ul>
  )
}
