import React, {useState, useEffect} from 'react';
import idPlantas from '../repository/idPlantas'
import styles from "../styles/testeFor.module.css"

export default function Search(){

    const id = 25
    const [address, setAddress] = useState('load')
    const [braid, setBraid] = useState(false)
    const [dados, setDados] = useState(null)

    const searchPlant = () => {
        try{
            idPlantas.idPlants.forEach(element => {
                console.log('entrou no for')
                if(element.id == id){
                    setAddress(element.address)
                    throw new Error('StopIteration');
                }
            });
            setAddress('erro')
        } catch (error) {
            if(error.message !== 'StopIteration'){
                console.log(error)
            }
        }
        
    }

    if(!braid){
        setBraid(true)
        searchPlant()
    }

    useEffect(() => {
        const carregarDados = async () => {
            if(address !== 'load' && address !== 'erro'){
                //console.log(address) 
                const dadosImportados = await import(`../repository/${address}.json`);
                setDados(dadosImportados.default);
            }
        };

        carregarDados();
    }, [address]);

    
    if(dados != null){
        console.log(dados.name)
    }

    return (
        <main className={styles.main}>
            {
                address === 'load'
                ?
                <Load/>
                :
                address === 'erro'
                ?
                <Error/>
                :
                <Template data={dados} />
            }
        </main>
    )
}

function Load(){
    return(
        <div className={styles.fade}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

function Error(){
    return(
        <h1>Error</h1>
    )
}

function Template({data}){
    return(
        <>
            <h1>{data?.name}</h1>

            <section className={styles.section}>
                <h3>{data?.sessions[0].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[0].content}
                </p>
            </section>

            <div className={styles.session}>
                <h1>{data?.images[0].tipo}</h1>
                <img src={data?.images[0].img}></img>
            </div>

            <section className={styles.section}>
                <h3>{data?.sessions[1].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[1].content}
                </p>
            </section>

            <section className={styles.section}>
                <h3>{data?.sessions[2].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[2].content}
                </p>
            </section>

            <div className={styles.session}>
                <h1>{data?.images[1].tipo}</h1>
                <hr></hr>
                <img src={data?.images[1].img}></img>
            </div>

            <section className={styles.section}>
                <h3>{data?.sessions[3].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[3].content}
                </p>
            </section>

            <div className={styles.session}>
                <h1>{data?.images[2].tipo}</h1>
                <img src={data?.images[2].img}></img>
            </div>

            <section className={styles.section}>
                <h3>{data?.sessions[4].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[4].content}
                </p>
            </section>

            <div className={styles.session}>
                <h1>{data?.images[3].tipo}</h1>
                <img src={data?.images[3].img}></img>
            </div>

            <section className={styles.section}>
                <h3>{data?.sessions[5].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[5].content}
                </p>
            </section>

            <section className={styles.section}>
                <h3>{data?.sessions[6].title}</h3>
                <hr></hr>
                <p> 
                    {data?.sessions[6].content}
                </p>
            </section>
        </>
    )
}