import { createContext, useState, useEffect } from 'react';

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';

import { firestoreDB, storageDocs } from '../firebase/firebaseConfig';

import {
  ref,
  uploadBytes,
  getBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export const FireStoreDataContext = createContext();

const FireStoreDataProvider = (props) => {
  const [items, setItems] = useState([]);

  const itemCollection = query(
    collection(firestoreDB, 'inventario'),
    where('email', '==', localStorage.getItem('userEmailLS')),
    where('sucursal', '==', 'San Carlos')
  );


const relojCollection = collection(firestoreDB, 'reloj')
 const [reloj, setReloj] = useState();

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getDocs(itemCollection)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No results!');
        }

        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(documents);
      })
      .catch((err) => {
        console.log('Error searching items', err);
      });






      // getDocs(relojCollection)
      // .then((querySnapshot) => {
      //   if (querySnapshot.size === 0) {
      //     console.log('No results Reloj!');
      //   }

      //   const documents = querySnapshot.docs.map((doc) =>(
      //     {...doc.data() }
      //   ))

      //   setReloj(documents[0].reloj);
      // })
      // .catch((err) => {
      //   console.log('Error searching items', err);
      // });




    isMounted = false;
  }, [toggle]);

  //============================= images functions ===========================//

  //localStorage.setItem('reloj', '1723705200000')

  

// console.log('relojFirebase', reloj)



  const postCollection = collection(firestoreDB, 'inventario');
  
  


//   let a = Date.now() 
//   let b = JSON.parse(localStorage.reloj) // 15 de Agosto
// console.log(b)

//   if(a >= b && a <= b + 86400000){
//       let c = b + 86400000
//       console.log('hoy:', a , 'manana:', c) //1723791600000 16 de Agosto
//   }else{
    
//       let c = b + 86400000
//       localStorage.setItem('reloj', c) 

//       let d = reloj + 86400000 
//       //addDoc(relojColection, {'reloj': d});
//       console.log('new update')
//   }


  const handleFileAdd = (selectedFile, postBody) => {
    const filesFolderRef = ref(
      storageDocs,
      `projectFiles/${selectedFile?.name}`
    );
    uploadBytes(filesFolderRef, selectedFile)
      .then(() => {
        getDownloadURL(filesFolderRef).then((url) => {
          postBody.imgName = selectedFile.name;
          postBody.imgUrl = url;
          addDoc(postCollection, postBody);
          setToggle(!toggle);
        });
      })
      .catch((error) => console.log(error));
  };

  //============================= images functions end ===========================//

  const deleteById = async (id, imgName) => {
    const aDoc = doc(firestoreDB, 'inventario', id);
    try {
      await deleteDoc(aDoc);

      const desertRef = ref(storageDocs, `projectFiles/${imgName}`);

      deleteObject(desertRef)
        .then(() => {
          console.log(imgName, 'se elimino de Storage');
        })
        .catch((error) => {
          console.log('ocurrio un error: ', error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const UpdateById = async (id, obj) => {
    const aDoc = doc(firestoreDB, 'inventario', id);
    try {
      await updateDoc(aDoc, obj);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FireStoreDataContext.Provider
      value={{
        items,
        deleteById,
        UpdateById,
        handleFileAdd,
        postCollection,
        setToggle,
        toggle,
      }}
    >
      {props.children}
    </FireStoreDataContext.Provider>
  );
};

export default FireStoreDataProvider;
