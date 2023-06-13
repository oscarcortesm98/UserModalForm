import { useEffect } from "react"
import { useForm } from "react-hook-form"

const ModalForm = ({ isShowModal, createUser, isUserToUpdate, updateUser, resetForm }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {

        if (!data.birthday) data.birthday = null

        if (isUserToUpdate) {
            updateUser(data, reset)
        } else {
            createUser(data, reset)
        }
    }

    const handleCloseModal = () => {
        resetForm(reset)
    }

    useEffect(() => {

        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }


    }, [isUserToUpdate])

    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className='form'>

                <h4 className='form-title'>{isUserToUpdate ? "Editar usuario" : "Nuevo usuario"}</h4>

                {/* Nombre */}
                <div className='form-div'>
                    <label className='form-label' htmlFor="">Nombre *</label>
                    <input className='form-input' placeholder='Ingresa tu nombre' type="text" {...register("first_name")} />
                </div>

                {/* Apellidos */}
                <div className='form-div'>
                    <label className='form-label' htmlFor="">Apellidos *</label>
                    <input className='form-input' placeholder='Ingresa tus apellidos' type="text" {...register("last_name")} />
                </div>

                {/* Correo */}
                <div className='form-div'>
                    <label className='form-label' htmlFor="">Correo *</label>
                    <input className='form-input' placeholder='Ingresa tu correo' type="email" {...register("email")} />
                </div>

                {/* Contraseña */}
                <div className='form-div'>
                    <label className='form-label' htmlFor="">Contraseña *</label>
                    <input className='form-input' placeholder='Ingresa tu contraseña' type="password" {...register("password")} />
                </div>

                {/* Cumpleaños */}
                <div className='form-div'>
                    <label className='form-label' htmlFor="">Cumpleaños</label>
                    <input className='form-input' placeholder='Ingresa tu cumpleaños' type="date" {...register("birthday")} />
                </div>

                <button onClick={handleCloseModal} type='button' className='absolute top-2 right-2 text-2xl hover:text-secondary'><i className='bx bx-x'></i></button>

                <div className="flex justify-center pt-6 pb-4">
                    <button className='btn-primary '>{isUserToUpdate ? "G U A R D A R" : "A G R E G A R"}</button>
                </div>

            </form>

        </section>
    )
}

export default ModalForm