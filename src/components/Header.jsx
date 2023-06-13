const Header = ({ changeShowModal }) => {

  const handleShowModal = () => { changeShowModal() }

  return (
    <section className='flex justify-between items-center p-4'>

      <h1 className='header-title'>U S U A R I O S</h1>

      <button onClick={handleShowModal} className='btn-primary'><i className='bx bx-plus mr-2'></i>CREAR USUARIO</button>

    </section>
  )
}

export default Header