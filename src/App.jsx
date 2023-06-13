import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import UserList from './components/UserList'
import axios from 'axios'

const BASE_URL = "https://users-crud.academlo.tech"

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}

function App() {

  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);

  const changeShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {

    const url = BASE_URL + "/users/"

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) => {

    const url = BASE_URL + "/users/"

    axios
      .post(url, data)
      .then(() => {
        getAllUsers()
        resetForm(reset)
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {

    const url = BASE_URL + `/users/${id}/`

    axios
      .delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) => {

    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios
      .patch(url, data)
      .then(() => {
        getAllUsers()
        resetForm(reset)
      })
      .catch((err) => console.log(err))
  }

  const resetForm = (reset) => {

    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  useEffect(() => { getAllUsers() }, [])

  return (

    <main className='main'>

      <Header
        changeShowModal={changeShowModal} />

      <ModalForm      
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetForm={resetForm} />

      <UserList
        users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate} />

    </main>
  )
}

export default App
