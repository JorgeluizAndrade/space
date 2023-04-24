import React from "react"
import home from '../../assets/icones/Rectangle 36.svg'
import visto from '../../assets/icones/Rectangle 37.svg'
import curtidas from '../../assets/icones/Rectangle 38.svg'
import novo from '../../assets/icones/Rectangle 39.svg'
import surpreenda from '../../assets/icones/Rectangle 40.svg'
import styles from './menu.module.scss'


export default function Menu() {
  return(
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={curtidas} alt="" />
                <a href="/">Mais Curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={visto} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novo} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreenda} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>

        </ul>
    </nav>
  )

}
