import { useHistory } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/cal');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={handleButtonClick}>Calendar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
