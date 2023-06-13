import React from 'react'
import User from './User'

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  return (
    <section className="userList">

      {
        users.map((user) => (
          <User
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            changeShowModal={changeShowModal}
            setIsUserToUpdate={setIsUserToUpdate}
          />
        ))}

    </section>
  )
}

export default UserList