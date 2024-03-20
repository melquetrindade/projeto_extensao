import React from "react"
import styles from "../styles/infoPlants.module.css"

export default function Home() {
    return(
        <main className={styles.main}>
            <h1>Xique-Xique</h1>

            <section className={styles.section}>
                <h3>Sobre</h3>
                <hr></hr>
                <p> 
                    O Xique-Xique é um cacto de porte médio a grande, com caules cilíndricos que podem atingir até 5 metros de altura. Possui espinhos grandes e afiados, o que o torna uma planta bastante espinhosa.
                </p>
            </section>
           
            <div className={styles.session}>
                <h1>Flor</h1>
                <img src="./xique_xique/flor.jpeg"></img>
            </div>

            <section className={styles.section}>
                <h3>Habitat</h3>
                <hr></hr>
                <p> 
                    É encontrado principalmente em áreas áridas e semiáridas da Caatinga, adaptado a condições de pouca água e alta incidência solar. Suas raízes são capazes de penetrar profundamente no solo em busca de água.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Floração e Frutificação</h3>
                <hr></hr>
                <p> 
                    Produz flores grandes e vistosas, geralmente de cor branca ou amarelada, que se abrem durante a noite para atrair polinizadores como morcegos e mariposas. Após a polinização, desenvolve frutos globosos de cor verde que contêm sementes.
                </p>
            </section>

            <div className={styles.session}>
                <h1>Flor</h1>
                <hr></hr>
                <img src="./xique_xique/flor2.jpeg"></img>
            </div>

            <section className={styles.section}>
                <h3>Importância Ecológica</h3>
                <hr></hr>
                <p> 
                    O Xique-Xique desempenha um papel importante no ecossistema da Caatinga, fornecendo alimento e abrigo para uma variedade de animais, além de contribuir para a conservação do solo em áreas propensas à erosão.
                </p>
            </section>

            <div className={styles.session}>
                <h1>Flor</h1>
                <img src="./xique_xique/flor3.jpeg"></img>
            </div>

            <section className={styles.section}>
                <h3>Utilização Humana</h3>
                <hr></hr>
                <p> 
                    Além de sua relevância ecológica, o Xique-Xique também é utilizado pelas populações locais para diversos fins, como alimentação (os frutos podem ser consumidos), medicina popular e até mesmo na fabricação de artesanato, devido à sua madeira resistente e aos espinhos que podem ser utilizados como agulhas.
                </p>
            </section>

            <div className={styles.session}>
                <h1>Fruto</h1>
                <img src="./xique_xique/fruto.jpeg"></img>
            </div>

            <section className={styles.section}>
                <h3>Adaptações ao Clima</h3>
                <hr></hr>
                <p> 
                    Como outras plantas da Caatinga, o Xique-Xique possui adaptações especiais para sobreviver às condições áridas, como sua capacidade de armazenar água em seus caules e folhas reduzidas, o que ajuda a minimizar a perda de água por evaporação.
                </p>
            </section>

            <section className={styles.section}>
                <h3>Resumindo...</h3>
                <hr></hr>
                <p> 
                    Essas são apenas algumas das características que tornam o Xique-Xique uma planta fascinante e importante na vegetação da Caatinga, ideal para ser incluída em um guia de plantas direcionado a leigos.
                </p>
            </section>
        </main>
    )
}