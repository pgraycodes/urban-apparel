import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
        apiKey: "AIzaSyCh-O3JMEHOSprwo3_F57XlTbYsQU7PyBc",
        authDomain: "crwn-db-8e703.firebaseapp.com",
        databaseURL: "https://crwn-db-8e703.firebaseio.com",
        projectId: "crwn-db-8e703",
        storageBucket: "crwn-db-8e703.appspot.com",
        messagingSenderId: "1015350678942",
        appId: "1:1015350678942:web:7a846e0b92b06a6deaf28f",
        measurementId: "G-4WX9CW2BYT"
      };

      firebase.initializeApp(config);

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;