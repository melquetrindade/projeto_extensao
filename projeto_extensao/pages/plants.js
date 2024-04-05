import { useRouter } from 'next/router';
import objPlantas from '../repository/idPlantas'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../styles/plants.module.css'


export default function Plantas() {

  const router = useRouter()

  const navDetails = ({id}) => {
    router.push({
      pathname: './[id]',
      query: {id: id}
    })
  }

  return (
    <main className={styles.main}>
      <h1>Plantas da Trilha da Raposa</h1>
      <hr></hr>
      <div className={styles.containerPlants}>
        {objPlantas.idPlants.map((item) => (
          <Card style={{ width: '10rem'}} className={styles.card}>
            <Card.Img variant="top" className={styles.img} src={item.img} />
            <Card.Body className={styles.body}>
              <Card.Title className={styles.name} >{item.name}</Card.Title>
              <Button variant="success" size="sm" onClick={() => navDetails({id: item.id})}>Detalhar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
}