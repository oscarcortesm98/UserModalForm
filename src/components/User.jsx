const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {

  const handleDelete = () => {
    deleteUser(user.id)
  }

  const handleUpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  return (
    <article className="user">

      <h4 className="user-name">{user.first_name} {user.last_name}</h4>

      <section className="pt-4">
        <div className="user-div-info">
          <h5 className="user-h5">CORREO</h5>
          <label className="user-label"><i className='bx bx-envelope'></i>  {user.email}</label>
        </div>

        <div className="user-div-info">
          <h5 className="user-h5">CUMPLEAÑOS</h5>
          <label className="user-label"><i className='bx bx-gift'></i> {user.birthday || "- Vacío -"}</label>
        </div>
      </section>

      <div className="user-div-buttons">
        <button onClick={handleUpdate} className="user-button btn-update"><i className='bx bx-edit'></i></button>
        <button onClick={handleDelete} className="user-button btn-delete"><i className='bx bx-trash'></i></button>
      </div>

    </article>
  )
}

export default User