import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'

const BASE_URL = 'https://users-crud.academlo.tech/'

function App() {
  /*******************************************ESTADOS*************************************************** */
  const [users, setUsers] = useState([]);
  // Estado que muestra la barra para agregar los usuarios.
  const [isShowModal, setIsShowModal] = useState(false);
  // Estado que muestra cuando se esta en modo edit
  const [updatingUser, setUpdatingUser] = useState();
  
  /*******************************************FUNCIONES*************************************************** */
  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal);
  };
  
  // Función que se encarga de crear el usuario.
  const createUser = (data) => {
    axios.post(`${BASE_URL}users/`, data)
    .then(() => {
      getAllUsers()
      handleClickShowModal()
    })
    .catch((err) => console.log(err));
  };
  
  // Función que se encarga de obtener todos los usuarios.
  const getAllUsers = () => {
    axios.get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  
  // Función que se encarga de eliminar usuarios.
  const deleteUser = (id) => {
    axios.delete(`${BASE_URL}users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };
  // Función que se encarga de editar los datos de los usuarios.
  const updateUser = (data, id) => {
    axios.patch(`${BASE_URL}users/${id}/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
        setUpdatingUser()
      })
      .catch((err) => console.log(err));
  };

  /*******************************************EFECTOS*************************************************** */
  
  useEffect(() => {
    getAllUsers()
  }, [])
  
  /*******************************************CONTENIDO*************************************************** */

  return (
    <div className="App">
      <Navbar 
        handleClickShowModal={handleClickShowModal}
      />
      <ModalForm 
        handleClickShowModal={handleClickShowModal} 
        isShowModal={isShowModal}
        createUser={createUser} 
        updatingUser={updatingUser} 
        updateUser={updateUser} 
        setUpdatingUser={setUpdatingUser} 
      />
      <UsersList 
        handleClickShowModal={handleClickShowModal} 
        setUpdatingUser={setUpdatingUser} 
        deleteUser={deleteUser} 
        users={users}
        />
    </div>
  )
}

export default App
