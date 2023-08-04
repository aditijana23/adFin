import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import { useEffect, useState } from 'react';
import { ScreenSizeList } from '../components/common/ScreenSizeList';




const Home: React.FC = () => {

  console.log(ScreenSizeList());
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {ScreenSizeList().screenWidth <= 480 ? 'mobile' : 'zzzzz'}
      </IonContent>
    </IonPage>
  );
};

export default Home;
