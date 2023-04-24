import banner from './orion-nebula-g73d97eeee_1920.jpg'
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from './PaginaInicial.module.scss'
import Rodape from '../../componentes/rodape/rodape';
import Galeria from '../../componentes/Galeria';
import Populares from '../../componentes/populares';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu></Menu>
                    <div className={styles.principal__imagem}>
                        <h1> Aqui tem fotos do espaço com alta qualidade!</h1>
                        <img src={banner} alt="imagem da nebulosa" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria></Galeria>
                    <Populares />
                    
                </div>
            </main>
            <Rodape></Rodape>

        </>
    )
}