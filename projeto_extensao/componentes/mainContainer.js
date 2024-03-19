import NavBar from './navBar'
import styles from '../styles/mainContainer.module.css'
import Container from 'react-bootstrap/Container'

export default function MainContainer({children}){
    return(
        <div>
            <NavBar/>
            <Container className={styles.mainContainer}>
                {children}
            </Container>
        </div>
    )
}

//<div className={styles.mainContainer}>{children}</div>