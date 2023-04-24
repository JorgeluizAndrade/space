import React from 'react'
import linkedin from './linkedin.png'
import styles from './rodape.module.scss'


export default function Rodape() {
      return (
        <footer className={styles.rodape}>
          <div className={styles.rodape__icones}>
            <a
              href="https://www.linkedin.com/in/jorge-luiz-andrade-de-souza-13078a262/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="ícone do facebook" />
            </a>
          </div>
          <p>Desenvolvido por Jorge luiz</p>
        </footer>
      );
    }

