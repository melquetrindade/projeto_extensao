import React from "react"
import styles from "../styles/infoPlants.module.css"

export default function Home() {
    return(
        <main className={styles.main}>
            <h1>Xique-Xique</h1>

            <section className={styles.section}>
                <h3>Sobre</h3>
                <p> 
                    O Xique-Xique é um cacto de porte médio a grande, com caules cilíndricos que podem atingir até 5 metros de altura. Possui espinhos grandes e afiados, o que o torna uma planta bastante espinhosa.
                </p>
            </section>
           
            <div className={styles.session}>

            </div>
        </main>
    )
}