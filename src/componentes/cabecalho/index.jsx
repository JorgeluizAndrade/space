import logo from './Logo.svg'
import search from './lupa.svg'
import styles from './cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo do space" />
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input} />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}